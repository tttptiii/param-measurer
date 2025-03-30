import React, { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";

import { NavigationButton } from "./NavigationButton";
import { PageType } from "../../types/types";

interface ColorCustomizerProps {
  setCurrentPage: (page: PageType) => void;
}

export class ColorCustomizer extends React.Component<ColorCustomizerProps> {
  render() {
    const { setCurrentPage } = this.props;

    return (
      <div className="flex flex-col gap-4 items-center">
        <ColorChangeApp></ColorChangeApp>
        <NavigationButton
          setCurrentPage={setCurrentPage}
          page={PageType.Home}
        ></NavigationButton>
      </div>
    );
  }
}

interface ColorChangingSceneProps {
  progress: number;
}

const ColorChangingScene: React.FC<ColorChangingSceneProps> = ({
  progress,
}) => {
  // Interpolate between black and red based on progress
  const color = `rgb(${Math.floor(progress * 255)}, 0, 0)`;

  return (
    <mesh>
      <planeGeometry args={[400, 400]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

const ColorChangeApp: React.FC = () => {
  // 한 라운드는 다음과 같이 정의된다.
  // - 검은 화면으로 시작
  // - 서서히 색이 바뀜
  // - stop을 누르면 라운드가 끝남
  const [isRoundStarted, setIsRoundStarted] = useState(false); // 라운드가 시작하기 전에는 멈춰있어야 한다.
  const [isRoundEnded, setIsRoundEnded] = useState(false); // 라운드가 시작하기 전에는 멈춰있어야 한다.
  const [roundProgress, setRoundProgress] = useState(0); // 각 round가 시작하고 나서 지난 시간, ms 단위.

  // 총 진행한 라운드가 세팅한 값 이상이면 멈춘다.
  const [isStarted, setIsStarted] = useState(false); // 맨 마지막에 끝났을때 사용
  const [isEnded, setIsEnded] = useState(false); // 맨 마지막에 끝났을때 사용
  const [curRound, setCurRound] = useState(0); // 현재 라운드
  const [elapsedTime, setElapsedTime] = useState<number[]>([]); // 각 round가 끝났을때 지난 시간 기록
  const startTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const maxRound = 5;
  const roundTime = 5000.0; // 한 라운드당 걸리는 시간, ms 단위.

  useEffect(() => {
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!isRoundStarted && !isRoundEnded) {
        // finalize는 되고 round start는 안됨.

        if (curRound >= maxRound) {
          // 총 라운드 수를 채웠으면 멈춘다.
          setIsEnded(true);
        } else {
          // initialize를 한다.
          setRoundProgress(0);
          startTimeRef.current = null;
          setIsRoundStarted(true);
        }
      }

      if (isRoundStarted) {
        if (!startTimeRef.current) startTimeRef.current = currentTime;
        // 5 seconds transition
        const elapsed = currentTime - startTimeRef.current;
        const newProgress = Math.min(elapsed / roundTime, 1);

        setRoundProgress(newProgress);

        if (newProgress < 1) {
          animationFrameId = requestAnimationFrame(animate);
          animationFrameRef.current = animationFrameId;
        }
      }

      if (isRoundEnded) {
        // finalize하고 나서 다음 라운드로.
        setElapsedTime([...elapsedTime, roundProgress * roundTime]);
        setCurRound(curRound + 1);
        setIsRoundEnded(false);
      }
    };

    if (isStarted && !isEnded) {
      animationFrameId = requestAnimationFrame(animate);
      animationFrameRef.current = animationFrameId;
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [
    isRoundStarted,
    isRoundEnded,
    isStarted,
    isEnded,
    curRound,
    elapsedTime,
    roundProgress,
  ]);

  const handleStartClick = () => {
    setIsStarted(true);
    setRoundProgress(0);
    startTimeRef.current = null;
  };

  const handleResetClick = () => {
    setIsRoundStarted(false);
    setIsRoundEnded(false);
    setIsStarted(false);
    setIsEnded(false);
    setRoundProgress(0);
    setCurRound(0);
    setElapsedTime([]);
    startTimeRef.current = null;

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  const handleStopClick = () => {
    setIsRoundEnded(true);
    setIsRoundStarted(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-4">
        <button
          onClick={handleStartClick}
          className="mr-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Start
        </button>
        <button
          onClick={handleStopClick}
          className="mr-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          disabled={!isRoundStarted || isEnded}
        >
          Stop
        </button>
        <button
          onClick={handleResetClick}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Reset
        </button>
      </div>
      <div className="border-2 border-gray-300">
        <Canvas style={{ width: 400, height: 400 }}>
          <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={1} />
          <ColorChangingScene progress={roundProgress} />
        </Canvas>
      </div>
      <div className="mt-4">
        <div className="text-lg font-semibold">
          Current Loop: {curRound + 1}/5
        </div>
        {elapsedTime.map((time, index) => (
          <div key={index} className="text-md">
            Loop {index + 1} Time: {time.toFixed(3)} ms
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorChangeApp;

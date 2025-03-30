import React from "react";

import { NavigationButton } from "./NavigationButton";
import { PageType } from "../../types/types";

interface PitchCustomizerProps {
  setCurrentPage: (page: PageType) => void;
}

export class PitchCustomizer extends React.Component<PitchCustomizerProps> {
  render() {
    const { setCurrentPage } = this.props;

    return (
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-4xl font-bold mb-8">Under Construction!</h2>
        <NavigationButton
          setCurrentPage={setCurrentPage}
          page={PageType.Home}
        ></NavigationButton>
      </div>
    );
  }
}

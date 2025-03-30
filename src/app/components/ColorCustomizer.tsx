import React from "react";

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
        <h2 className="text-4xl font-bold mb-8">Under Construction!</h2>
        <NavigationButton
          setCurrentPage={setCurrentPage}
          page={PageType.Home}
        ></NavigationButton>
      </div>
    );
  }
}

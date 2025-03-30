import React from "react";

import { NavigationButton } from "./NavigationButton";
import { PageType } from "../../types/types";

interface HomeBodyProps {
  setCurrentPage: (page: PageType) => void;
}

export class HomeBody extends React.Component<HomeBodyProps> {
  render() {
    const { setCurrentPage } = this.props;

    return (
      <div className="flex flex-col gap-4 items-center">
        <NavigationButton
          setCurrentPage={setCurrentPage}
          page={PageType.Hello}
        ></NavigationButton>
        <NavigationButton
          setCurrentPage={setCurrentPage}
          page={PageType.World}
        ></NavigationButton>
      </div>
    );
  }
}

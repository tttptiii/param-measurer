import React from "react";

import { PageType } from "../../types/types";

interface NavigationButtonProps {
  setCurrentPage: (page: PageType) => void;
  page: PageType;
}

export class NavigationButton extends React.Component<NavigationButtonProps> {
  render() {
    const { setCurrentPage, page } = this.props;

    return (
      <button
        onClick={() => setCurrentPage(page)}
        className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        {page}
      </button>
    );
  }
}

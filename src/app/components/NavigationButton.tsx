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
        className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                 transition-all duration-200 shadow-md hover:shadow-lg 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        {page}
      </button>
    );
  }
}

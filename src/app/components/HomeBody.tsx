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
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to Param Measurer</h2>
          <p className="text-gray-600 mb-8">Choose a tool to get started</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Color Customizer</h3>
            <p className="text-gray-600 mb-4">Customize and measure color parameters with precision</p>
            <NavigationButton
              setCurrentPage={setCurrentPage}
              page={PageType.ColorCustomizer}
            />
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Pitch Customizer</h3>
            <p className="text-gray-600 mb-4">Fine-tune and measure pitch parameters</p>
            <NavigationButton
              setCurrentPage={setCurrentPage}
              page={PageType.PitchCustomizer}
            />
          </div>
        </div>
      </div>
    );
  }
}

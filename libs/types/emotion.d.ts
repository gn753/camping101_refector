import "@emotion/react";
import { LibTheme } from "some-lib";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      primary: string;
      green: string;
      teal: string;
    };
  }
}

// You are also able to use a 3rd party theme this way:

declare module "@emotion/react" {
  export interface Theme extends LibTheme {}
}

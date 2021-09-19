import {Box, BoxExtendedProps} from "grommet";
import {ReactNode} from "react";

const AppBar = (props: JSX.IntrinsicAttributes & BoxExtendedProps & { children?: ReactNode; }) => (
      <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: 1 }}
    {...props}
  />
);

export default AppBar;
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Heading from "components/Heading/Heading.js";
// import Timeline from "components/Timeline/Timeline.js";
// import CardBody from "components/Card/CardBody.js";
import Card from "components/Card/Card.js";

import styles from "assets/jss/material-dashboard-pro-react/views/welcomePageStyle";
const useStyles = makeStyles(styles);

export default function WelcomePage() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Heading title="Calculate it yourself" textAlign="center" />
      <GridContainer>
        <GridItem xs={12}>
          <Card plain></Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

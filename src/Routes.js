import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import Container from '@material-ui/core/Container';
import Grid from './common/layout/grid/grid'
import GridList from './common/layout/gridList/gridList';
import Hidden from './common/layout/hidden/hidden';
import AppBarExample from './common/surface/App Bar/appBar';
import PaperSheet from './common/surface/paper';
import CardExample from './common/surface/card/cardExample';
import ExpansionPanel from './common/surface/expansionPanel/expansionPanel';
import Buttons from './common/Input/button/buttons';
import CheckboxExample from './common/Input/checkboxes/checkBoxExample';
import RadioButton from './common/Input/radioButtons/radioButtonExample';
import AutoComplete from './common/Input/autoComplete/autoComplete';
import SwitchExamples from './common/Input/switches/switchExample';
import SelectExample from './common/Input/selects/selectExample';
import TransferListExample from './common/Input/transferList/transferListExample';
import TextfieldExample from './common/Input/textField/textfieldExample';
import BottomNavigationEg from './common/navigation/bottomNavigation/bottomNavigationEg';
import BreadcrumbEg from './common/navigation/breadCrumbs/breadCrumbEg';
import LinkEg from './common/navigation/links/linksEg';
import DrawerEg from './common/navigation/drawer/drawerEg';
import MenuEg from './common/navigation/menu/menuEg';
import StepperEg from './common/navigation/steppers/stepperEg';
import TabEg from './common/navigation/tabs/tabEg';
import DialogEg from './common/feedback/dialog/dialogEg';
import ProgressEg from './common/feedback/progress/progressEg';
import SnackbarEg from './common/feedback/snackbar/snackbarEg';
import AvatarEg from './common/dataDisplay/avatars/avatarEg';
import BadgeEg from './common/dataDisplay/badges/badgesEg';
import ChipsEg from './common/dataDisplay/chips/chipsEg';
import DividerEg from './common/dataDisplay/dividers/dividerEg';
import IconEg from './common/dataDisplay/icons/iconsEg';
import ListEg from './common/dataDisplay/lists/listEg';
import TableEg from './common/dataDisplay/table/tableEg';
import TooltipEg from './common/dataDisplay/toolTips/tooltipEg';
import TypoEg from './common/dataDisplay/typography/typographyEg';
import SpeedDialEg from './common/lab/speedDial/speedDialEg';
import ToggleEg from './common/lab/toggleButton/toggleEg';
import SliderEg from './common/lab/slider/sliderEg';
import NossrEg from './common/utils/noSSR/nossr';
import PopoverEg from './common/utils/popover/popoverEg';
import PopperEg from './common/utils/popper/popperEg';
import TransitionEg from './common/utils/transition/transitionEg';
import MediaQueryEg from './common/utils/useMediaQuery/mediaQueryEg';
import Sidebar from './components/SideNavigation';

class Routes extends Component {
  render() {
    return (
      <div className="wrapper">
        <Router>
        <Header />
        <Sidebar/> 
          <Switch >
            <Container maxWidth="lg">
              {/* <Route path="/container" component={ContainerExample} /> */}
              <Route path="/grid" component={Grid} />
              <Route path="/gridList" component={GridList} />
              <Route path="/hidden" component={Hidden} />

              <Route path="/autocomplete" component={AutoComplete} />
              <Route path="/appbar" component={AppBarExample} />
              <Route path="/paper" component={PaperSheet} />
              <Route path="/card" component={CardExample} />
              <Route path="/expansion" component={ExpansionPanel} />
              <Route path="/button" component={Buttons} />
              <Route path="/checkbox" component={CheckboxExample} />
              <Route path="/radio" component={RadioButton} />
              <Route path="/select" component={SelectExample} />
              <Route path="/switch" component={SwitchExamples} />
              <Route path="/textfield" component={TextfieldExample} />
              <Route path="/transferlist" component={TransferListExample} />

              <Route path="/bottomnav" component={BottomNavigationEg} />
              <Route path="/breadcrumbs" component={BreadcrumbEg} />
              <Route path="/drawer" component={DrawerEg} />
              <Route path="/link" component={LinkEg} />
              <Route path="/menu" component={MenuEg} />
              <Route path="/steppers" component={StepperEg} />
              <Route path="/tabs" component={TabEg} />

              <Route path="/dialog" component={DialogEg} />
              <Route path="/progress" component={ProgressEg} />
              <Route path="/snackbar" component={SnackbarEg} />
              <Route path="/avatar" component={AvatarEg} />
              <Route path="/badges" component={BadgeEg} />
              <Route path="/chips" component={ChipsEg} />
              <Route path="/dividers" component={DividerEg} />
              <Route path="/icons" component={IconEg} />
              <Route path="/list" component={ListEg} />
              <Route path="/table" component={TableEg} />
              <Route path="/tooltips" component={TooltipEg} />
              <Route path="/typography" component={TypoEg} />

              <Route path="/slider" component={SliderEg} />
              <Route path="/speeddial" component={SpeedDialEg} />
              <Route path="/toggle" component={ToggleEg} />
              
              <Route path="/nossr" component={NossrEg} />
              <Route path="/popover" component={PopoverEg} />
              <Route path="/popper" component={PopperEg} />
              <Route path="/mediaquery" component={MediaQueryEg} />
              <Route path="/transition" component={TransitionEg} />

              {/* <Route path="/picker" component={PickerExample} /> */}
            </Container>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default Routes;
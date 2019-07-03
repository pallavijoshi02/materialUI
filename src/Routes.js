import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import ContainerExample from './components/layout/container';
import Grid from './components/layout/grid/grid'
import GridList from './components/layout/gridList/gridList';
import Hidden from './components/layout/hidden/hidden';
import AppBarExample from './components/surface/App Bar/appBar';
import PaperSheet from './components/surface/paper';
import CardExample from './components/surface/card/cardExample';
import ExpansionPanel from './components/surface/expansionPanel/expansionPanel';
import Buttons from './components/Input/button/buttons';
import CheckboxExample from './components/Input/checkboxes/checkBoxExample';
//import PickerExample from './components/Input/pickers/pickersExample';
import Dashboard from './Dashboard';
import Header from './components/header';
import Container from '@material-ui/core/Container';
import RadioButton from './components/Input/radioButtons/radioButtonExample';
import AutoComplete from './components/Input/autoComplete/autoComplete';
import SwitchExamples from './components/Input/switches/switchExample';
import SelectExample from './components/Input/selects/selectExample';
import TransferListExample from './components/Input/transferList/transferListExample';
import TextfieldExample from './components/Input/textField/textfieldExample';
import BottomNavigationEg from './components/navigation/bottomNavigation/bottomNavigationEg';
import BreadcrumbEg from './components/navigation/breadCrumbs/breadCrumbEg';
import LinkEg from './components/navigation/links/linksEg';
import DrawerEg from './components/navigation/drawer/drawerEg';
import MenuEg from './components/navigation/menu/menuEg';
import StepperEg from './components/navigation/steppers/stepperEg';
import TabEg from './components/navigation/tabs/tabEg';
import DialogEg from './components/feedback/dialog/dialogEg';
import ProgressEg from './components/feedback/progress/progressEg';
import SnackbarEg from './components/feedback/snackbar/snackbarEg';
import AvatarEg from './components/dataDisplay/avatars/avatarEg';
import BadgeEg from './components/dataDisplay/badges/badgesEg';
import ChipsEg from './components/dataDisplay/chips/chipsEg';
import DividerEg from './components/dataDisplay/dividers/dividerEg';
import IconEg from './components/dataDisplay/icons/iconsEg';
import ListEg from './components/dataDisplay/lists/listEg';
import TableEg from './components/dataDisplay/table/tableEg';
import TooltipEg from './components/dataDisplay/toolTips/tooltipEg';
import TypoEg from './components/dataDisplay/typography/typographyEg';
import SpeeddialEg from './components/lab/speedDial/speedDialEg';
import ToggleEg from './components/lab/toggleButton/toggleEg';
import SliderEg from './components/lab/slider/sliderEg';
import NossrEg from './components/utils/noSSR/nossr';
import PopoverEg from './components/utils/popover/popoverEg';
import PopperEg from './components/utils/popper/popperEg';
import TransitionEg from './components/utils/transition/transitionEg';
import MediaQueryEg from './components/utils/useMediaQuery/mediaQueryEg';

class Routes extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Dashboard />
        <Router>
          <Switch >
            <Container maxWidth="lg">
              <Route path="/components" component={Dashboard} />
              <Route path="/container" component={ContainerExample} />
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
              <Route path="/snackbar" component={SnackbarEg} />
              <Route path="/chips" component={ChipsEg} />
              <Route path="/divider" component={DividerEg} />
              <Route path="/icons" component={IconEg} />
              <Route path="/list" component={ListEg} />
              <Route path="/table" component={TableEg} />
              <Route path="/tooltip" component={TooltipEg} />
              <Route path="/typography" component={TypoEg} />

              <Route path="/slider" component={SliderEg} />
              <Route path="/speedial" component={SpeeddialEg} />
              <Route path="/toggle" component={ToggleEg} />

              
              <Route path="/nossr" component={NossrEg} />
              <Route path="/popover" component={PopoverEg} />
              <Route path="/popper" component={PopperEg} />
              <Route path="/mediaquery" component={MediaQueryEg} />
              <Route path="/slider" component={SliderEg} />
              <Route path="/speedial" component={SpeeddialEg} />
              <Route path="/toggle" component={ToggleEg} />


              {/* <Route path="/picker" component={PickerExample} /> */}
            </Container>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default Routes;
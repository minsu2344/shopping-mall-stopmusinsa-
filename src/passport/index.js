import passport from 'passport';
import {local} from './strategies';

export default () => {
  // local strategy 사용
  passport.use(local);
};

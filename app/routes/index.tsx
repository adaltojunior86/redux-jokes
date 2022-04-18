import { LinksFunction } from 'remix';
import stylesUrl from '../styles/index.css';

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
}

const Index = () => ("Hello Index Route")

export default Index;

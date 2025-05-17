import { useContext } from 'react';
import WebsiteContext from './websiteContext';

export default function useWebsiteData() {
  return useContext(WebsiteContext);
}
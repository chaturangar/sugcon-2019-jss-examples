// eslint-disable-next-line no-unused-vars
import { SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the Exercise7Component component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: 'Exercise7Component',
    icon: SitecoreIcon.DocumentTag,
    
    //NO component level fields defined
    
  });
}

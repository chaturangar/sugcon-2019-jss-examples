// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';
import packageJson from '../../../package.json';

/**
 * Adds the Exercise8Component component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: 'Exercise8Component',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      {
        name: 'sharedItemLink',
        type: CommonFieldTypes.ItemLink,
        source: `dataSource=/sitecore/content/${
          packageJson.config.appName
        }/Content/Styleguide/ItemLinkField`,
      },
      { name: 'localItemLink', type: CommonFieldTypes.ItemLink },
    ]
  });
}

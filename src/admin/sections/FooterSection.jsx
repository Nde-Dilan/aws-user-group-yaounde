import React from 'react';
import TextField from '../components/TextField';
import TextArea from '../components/TextArea';
import ArrayEditor from '../components/ArrayEditor';
import SectionHeader from '../../components/shared/SectionHeader';

function FooterSection({ data, onChange }) {
  const handleChange = (field, value) => {
    onChange({
      ...data,
      [field]: value
    });
  };

  const handleLogoChange = (field, value) => {
    handleChange('logo', {
      ...data.logo,
      [field]: value
    });
  };

  const handleQuickLinksChange = (newLinks) => {
    handleChange('links', {
      ...data.links,
      quickLinks: {
        ...data.links.quickLinks,
        items: newLinks
      }
    });
  };

  const handleResourcesChange = (newResources) => {
    handleChange('links', {
      ...data.links,
      resources: {
        ...data.links.resources,
        items: newResources
      }
    });
  };

  const handleLegalChange = (newLegal) => {
    handleChange('links', {
      ...data.links,
      legal: {
        ...data.links.legal,
        items: newLegal
      }
    });
  };

  const handleSocialChange = (newSocial) => {
    handleChange('social', newSocial);
  };

  const renderLink = (link, onLinkChange) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextField
          label="Link Text"
          value={link.label || ''}
          onChange={(value) => onLinkChange({ ...link, label: value })}
          placeholder="Link display text"
        />
        <TextField
          label="URL"
          value={link.href || ''}
          onChange={(value) => onLinkChange({ ...link, href: value })}
          placeholder="Link destination"
        />
      </div>
    );
  };

  const renderSocialLink = (link, onLinkChange) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col">
          <label className="block text-gray-700 font-medium mb-2">Platform</label>
          <select
            value={link.platform || ''}
            onChange={(e) => onLinkChange({ ...link, platform: e.target.value })}
            className="px-4 py-3 border border-gray-300 rounded focus:border-secondary"
          >
            <option value="">Select platform</option>
            <option value="twitter">Twitter</option>
            <option value="linkedin">LinkedIn</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
            <option value="github">GitHub</option>
          </select>
        </div>
        <TextField
          label="Icon"
          value={link.icon || ''}
          onChange={(value) => onLinkChange({ ...link, icon: value })}
          placeholder="Icon class"
        />
        <TextField
          label="URL"
          value={link.url || ''}
          onChange={(value) => onLinkChange({ ...link, url: value })}
          placeholder="Social media URL"
        />
      </div>
    );
  };

  return (
    <div>
      <SectionHeader title="Footer Section" subtitle="Edit footer information and links" />
      
      <form className="space-y-8">
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-lg font-semibold text-primary mb-4">Footer Logo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextField
              label="Logo Icon"
              id="footer-logo-icon"
              value={data.logo.icon || ''}
              onChange={(value) => handleLogoChange('icon', value)}
              placeholder="Icon class (e.g., ri-cloud-line)"
            />
            
            <TextArea
              label="Logo Text"
              id="footer-logo-text"
              value={data.logo.text || ''}
              onChange={(value) => handleLogoChange('text', value)}
              placeholder="Text to display next to logo"
              rows={2}
            />
          </div>
        </div>
        
        <TextArea
          label="Footer Description"
          id="footer-description"
          value={data.description || ''}
          onChange={(value) => handleChange('description', value)}
          placeholder="Brief description of your organization"
          rows={3}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-medium text-gray-700 mb-4">Quick Links</h4>
            <TextField
              label="Section Title"
              value={data.links.quickLinks.title || ''}
              onChange={(value) => handleChange('links', {
                ...data.links,
                quickLinks: {
                  ...data.links.quickLinks,
                  title: value
                }
              })}
              placeholder="Links section title"
            />
            <ArrayEditor
              items={data.links.quickLinks.items || []}
              onChange={handleQuickLinksChange}
              renderItem={renderLink}
              addButtonText="Add Quick Link"
            />
          </div>
          
          <div>
            <h4 className="font-medium text-gray-700 mb-4">Resources</h4>
            <TextField
              label="Section Title"
              value={data.links.resources.title || ''}
              onChange={(value) => handleChange('links', {
                ...data.links,
                resources: {
                  ...data.links.resources,
                  title: value
                }
              })}
              placeholder="Resources section title"
            />
            <ArrayEditor
              items={data.links.resources.items || []}
              onChange={handleResourcesChange}
              renderItem={renderLink}
              addButtonText="Add Resource Link"
            />
          </div>
          
          <div>
            <h4 className="font-medium text-gray-700 mb-4">Legal</h4>
            <TextField
              label="Section Title"
              value={data.links.legal.title || ''}
              onChange={(value) => handleChange('links', {
                ...data.links,
                legal: {
                  ...data.links.legal,
                  title: value
                }
              })}
              placeholder="Legal section title"
            />
            <ArrayEditor
              items={data.links.legal.items || []}
              onChange={handleLegalChange}
              renderItem={renderLink}
              addButtonText="Add Legal Link"
            />
          </div>
        </div>
        
        <TextField
          label="Copyright Text"
          id="copyright"
          value={data.copyright || ''}
          onChange={(value) => handleChange('copyright', value)}
          placeholder="Copyright information"
        />
        
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold text-primary mb-4">Social Media</h3>
          <ArrayEditor
            items={data.social || []}
            onChange={handleSocialChange}
            renderItem={renderSocialLink}
            addButtonText="Add Social Link"
          />
        </div>
      </form>
    </div>
  );
}

export default FooterSection;
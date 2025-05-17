import React from "react";
import TextField from "../components/TextField";
import ArrayEditor from "../components/ArrayEditor";
import SectionHeader from "../../components/shared/SectionHeader";

function NavigationSection({ data, onChange }) {
  const handleChange = (field, value) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  const handleLogoChange = (field, value) => {
    onChange({
      ...data,
      logo: {
        ...data.logo,
        [field]: value,
      },
    });
  };

  const handleLinksChange = (newLinks) => {
    handleChange("links", newLinks);
  };

  const renderNavLink = (link, onLinkChange) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <TextField
          label="Link ID"
          value={link.id || ""}
          onChange={(value) => onLinkChange({ ...link, id: value })}
          placeholder="Unique identifier (e.g., home)"
        />
        <TextField
          label="Display Label"
          value={link.label || ""}
          onChange={(value) => onLinkChange({ ...link, label: value })}
          placeholder="Navigation link text"
        />
        <TextField
          label="URL/Anchor"
          value={link.href || ""}
          onChange={(value) => onLinkChange({ ...link, href: value })}
          placeholder="Link destination (e.g., #home)"
        />
      </div>
    );
  };

  return (
    <div>
      <SectionHeader
        title="Navigation"
        subtitle="Configure the site navigation"
      />

      <form className="space-y-8">
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-lg font-semibold text-primary mb-4">Logo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextField
              label="Logo Icon"
              id="logo-icon"
              value={data.logo.icon || ""}
              onChange={(value) => handleLogoChange("icon", value)}
              placeholder="Icon class (e.g., ri-cloud-line)"
            />

            <TextField
              label="Logo Text"
              id="logo-text"
              value={data.logo.text || ""}
              onChange={(value) => handleLogoChange("text", value)}
              placeholder="Text to display next to logo"
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">
            Navigation Links
          </h3>
          <ArrayEditor
            items={data.links || []}
            onChange={handleLinksChange}
            renderItem={renderNavLink}
            addButtonText="Add Navigation Link"
          />
        </div>
      </form>
    </div>
  );
}

export default NavigationSection;

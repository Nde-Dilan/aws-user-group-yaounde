import React from "react";
import TextField from "../components/TextField";
import TextArea from "../components/TextArea";
import ArrayEditor from "../components/ArrayEditor";
import SectionHeader from "../../components/shared/SectionHeader";

function ContactSection({ data, onChange }) {
  const handleChange = (field, value) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  const handleFormChange = (field, value) => {
    handleChange("form", {
      ...data.form,
      [field]: value,
    });
  };

  const handleFormFieldsChange = (newFields) => {
    handleChange("form", {
      ...data.form,
      fields: newFields,
    });
  };

  const handleCheckboxChange = (field, value) => {
    handleChange("form", {
      ...data.form,
      checkbox: {
        ...data.form.checkbox,
        [field]: value,
      },
    });
  };

  const handleInfoChange = (field, value) => {
    handleChange("info", {
      ...data.info,
      [field]: value,
    });
  };

  const handleInfoItemsChange = (newItems) => {
    handleChange("info", {
      ...data.info,
      items: newItems,
    });
  };

  const handleSocialLinksChange = (newLinks) => {
    handleChange("info", {
      ...data.info,
      social: newLinks,
    });
  };

  const handleNewsletterChange = (field, value) => {
    handleChange("info", {
      ...data.info,
      newsletter: {
        ...data.info.newsletter,
        [field]: value,
      },
    });
  };

  const renderFormField = (field, onFieldChange) => {
    return (
      <div className="space-y-4">
        <TextField
          label="Field ID"
          value={field.id || ""}
          onChange={(value) => onFieldChange({ ...field, id: value })}
          placeholder="Unique field identifier"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextField
            label="Field Label"
            value={field.label || ""}
            onChange={(value) => onFieldChange({ ...field, label: value })}
            placeholder="Form field label"
          />

          <div className="flex flex-col">
            <label className="block text-gray-700 font-medium mb-2">
              Field Type
            </label>
            <select
              value={field.type || "text"}
              onChange={(e) =>
                onFieldChange({ ...field, type: e.target.value })
              }
              className="px-4 py-3 border border-gray-300 rounded focus:border-secondary"
            >
              <option value="text">Text</option>
              <option value="email">Email</option>
              <option value="tel">Phone</option>
              <option value="textarea">Textarea</option>
            </select>
          </div>
        </div>

        <TextField
          label="Placeholder"
          value={field.placeholder || ""}
          onChange={(value) => onFieldChange({ ...field, placeholder: value })}
          placeholder="Field placeholder text"
        />
      </div>
    );
  };

  const renderContactInfoItem = (item, onItemChange) => {
    return (
      <div className="space-y-4">
        <TextField
          label="Icon"
          value={item.icon || ""}
          onChange={(value) => onItemChange({ ...item, icon: value })}
          placeholder="Icon class (e.g., ri-mail-line)"
        />
        <TextField
          label="Title"
          value={item.title || ""}
          onChange={(value) => onItemChange({ ...item, title: value })}
          placeholder="Contact info title"
        />
        <TextArea
          label="Content"
          value={item.content || ""}
          onChange={(value) => onItemChange({ ...item, content: value })}
          placeholder="Contact information content"
          rows={3}
        />
      </div>
    );
  };

  const renderSocialLink = (link, onLinkChange) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col">
          <label className="block text-gray-700 font-medium mb-2">
            Platform
          </label>
          <select
            value={link.platform || ""}
            onChange={(e) =>
              onLinkChange({ ...link, platform: e.target.value })
            }
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
          value={link.icon || ""}
          onChange={(value) => onLinkChange({ ...link, icon: value })}
          placeholder="Icon class"
        />
        <TextField
          label="URL"
          value={link.url || ""}
          onChange={(value) => onLinkChange({ ...link, url: value })}
          placeholder="Social media URL"
        />
      </div>
    );
  };

  return (
    <div>
      <SectionHeader
        title="Contact Section"
        subtitle="Edit contact information and form fields"
      />

      <form className="space-y-8">
        <TextField
          label="Section Title"
          id="contact-title"
          value={data.title || ""}
          onChange={(value) => handleChange("title", value)}
          placeholder="Enter section title"
        />

        <TextArea
          label="Section Subtitle"
          id="contact-subtitle"
          value={data.subtitle || ""}
          onChange={(value) => handleChange("subtitle", value)}
          placeholder="Enter section subtitle"
          rows={3}
        />

        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold text-primary mb-4">
            Contact Form
          </h3>

          <ArrayEditor
            label="Form Fields"
            items={data.form.fields || []}
            onChange={handleFormFieldsChange}
            renderItem={renderFormField}
            addButtonText="Add Form Field"
          />

          <div className="mt-6">
            <h4 className="font-medium text-gray-700 mb-2">
              Newsletter Subscription
            </h4>
            <TextField
              label="Checkbox Label"
              value={data.form.checkbox.label || ""}
              onChange={(value) => handleCheckboxChange("label", value)}
              placeholder="Newsletter subscription text"
            />
          </div>

          <TextField
            label="Submit Button Text"
            id="submit-text"
            value={data.form.submitText || ""}
            onChange={(value) => handleFormChange("submitText", value)}
            placeholder="Submit button text"
          />
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold text-primary mb-4">
            Contact Information
          </h3>

          <TextField
            label="Info Title"
            id="info-title"
            value={data.info.title || ""}
            onChange={(value) => handleInfoChange("title", value)}
            placeholder="Contact info section title"
          />

          <ArrayEditor
            label="Contact Info Items"
            items={data.info.items || []}
            onChange={handleInfoItemsChange}
            renderItem={renderContactInfoItem}
            addButtonText="Add Contact Info Item"
          />

          <div className="mt-6">
            <h4 className="font-medium text-gray-700 mb-4">
              Social Media Links
            </h4>
            <ArrayEditor
              items={data.info.social || []}
              onChange={handleSocialLinksChange}
              renderItem={renderSocialLink}
              addButtonText="Add Social Link"
            />
          </div>

          <div className="mt-6">
            <h4 className="font-medium text-gray-700 mb-4">Newsletter</h4>
            <TextField
              label="Newsletter Title"
              value={data.info.newsletter.title || ""}
              onChange={(value) => handleNewsletterChange("title", value)}
              placeholder="Newsletter section title"
            />

            <TextArea
              label="Newsletter Description"
              value={data.info.newsletter.description || ""}
              onChange={(value) => handleNewsletterChange("description", value)}
              placeholder="Newsletter description"
              rows={2}
            />

            <TextField
              label="Input Placeholder"
              value={data.info.newsletter.inputPlaceholder || ""}
              onChange={(value) =>
                handleNewsletterChange("inputPlaceholder", value)
              }
              placeholder="Email input placeholder"
            />

            <TextField
              label="Button Text"
              value={data.info.newsletter.buttonText || ""}
              onChange={(value) => handleNewsletterChange("buttonText", value)}
              placeholder="Subscribe button text"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactSection;

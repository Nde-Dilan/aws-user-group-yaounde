import React from "react";
import TextField from "../components/TextField";
import TextArea from "../components/TextArea";
import ArrayEditor from "../components/ArrayEditor";
import SectionHeader from "../../components/shared/SectionHeader";

function AboutSection({ data, onChange }) {
  const handleChange = (field, value) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  const handleMissionChange = (field, value) => {
    handleChange("mission", {
      ...data.mission,
      [field]: value,
    });
  };

  const handleCoreValuesChange = (field, value) => {
    handleChange("coreValues", {
      ...data.coreValues,
      [field]: value,
    });
  };

  const handleCoreValueItemsChange = (newValues) => {
    handleChange("coreValues", {
      ...data.coreValues,
      values: newValues,
    });
  };

  const handleBenefitsChange = (field, value) => {
    handleChange("benefits", {
      ...data.benefits,
      [field]: value,
    });
  };

  const handleBenefitItemsChange = (newItems) => {
    handleChange("benefits", {
      ...data.benefits,
      items: newItems,
    });
  };

  const renderCoreValue = (value, onValueChange) => {
    return (
      <div className="space-y-4">
        <TextField
          label="Icon"
          value={value.icon || ""}
          onChange={(newValue) => onValueChange({ ...value, icon: newValue })}
          placeholder="Icon class (e.g., ri-group-line)"
        />
        <TextField
          label="Title"
          value={value.title || ""}
          onChange={(newValue) => onValueChange({ ...value, title: newValue })}
          placeholder="Core value title"
        />
        <TextArea
          label="Description"
          value={value.description || ""}
          onChange={(newValue) =>
            onValueChange({ ...value, description: newValue })
          }
          placeholder="Core value description"
          rows={3}
        />
      </div>
    );
  };

  const renderBenefit = (item, onItemChange) => {
    return (
      <div className="space-y-4">
        <TextField
          label="Icon"
          value={item.icon || ""}
          onChange={(newValue) => onItemChange({ ...item, icon: newValue })}
          placeholder="Icon class (e.g., ri-user-voice-line)"
        />
        <TextField
          label="Title"
          value={item.title || ""}
          onChange={(newValue) => onItemChange({ ...item, title: newValue })}
          placeholder="Benefit title"
        />
        <TextArea
          label="Description"
          value={item.description || ""}
          onChange={(newValue) =>
            onItemChange({ ...item, description: newValue })
          }
          placeholder="Benefit description"
          rows={2}
        />
      </div>
    );
  };

  return (
    <div>
      <SectionHeader
        title="About Section"
        subtitle="Edit information about your AWS User Group"
      />

      <form className="space-y-8">
        <TextField
          label="Section Title"
          id="about-title"
          value={data.title || ""}
          onChange={(value) => handleChange("title", value)}
          placeholder="Enter section title"
        />

        <TextArea
          label="Section Subtitle"
          id="about-subtitle"
          value={data.subtitle || ""}
          onChange={(value) => handleChange("subtitle", value)}
          placeholder="Enter section subtitle"
          rows={3}
        />

        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold text-primary mb-4">
            Our Mission
          </h3>
          <TextField
            label="Mission Title"
            id="mission-title"
            value={data.mission.title || ""}
            onChange={(value) => handleMissionChange("title", value)}
            placeholder="Mission title"
          />
          <TextArea
            label="Mission Description"
            id="mission-description"
            value={data.mission.description || ""}
            onChange={(value) => handleMissionChange("description", value)}
            placeholder="Mission description"
            rows={4}
          />
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold text-primary mb-4">
            Core Values
          </h3>
          <TextField
            label="Core Values Title"
            id="core-values-title"
            value={data.coreValues.title || ""}
            onChange={(value) => handleCoreValuesChange("title", value)}
            placeholder="Core values section title"
          />

          <ArrayEditor
            label="Values"
            items={data.coreValues.values || []}
            onChange={handleCoreValueItemsChange}
            renderItem={renderCoreValue}
            addButtonText="Add Core Value"
          />
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold text-primary mb-4">
            Benefits of Joining
          </h3>
          <TextField
            label="Benefits Title"
            id="benefits-title"
            value={data.benefits.title || ""}
            onChange={(value) => handleBenefitsChange("title", value)}
            placeholder="Benefits section title"
          />

          <ArrayEditor
            label="Benefit Items"
            items={data.benefits.items || []}
            onChange={handleBenefitItemsChange}
            renderItem={renderBenefit}
            addButtonText="Add Benefit"
          />
        </div>
      </form>
    </div>
  );
}

export default AboutSection;

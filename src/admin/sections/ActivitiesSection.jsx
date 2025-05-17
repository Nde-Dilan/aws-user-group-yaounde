import React from "react";
import TextField from "../components/TextField";
import TextArea from "../components/TextArea";
import ImageUploader from "../components/ImageUploader";
import ArrayEditor from "../components/ArrayEditor";
import SectionHeader from "../../components/shared/SectionHeader";

function ActivitiesSection({ data, onChange }) {
  const handleChange = (field, value) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  const handleCategoriesChange = (newCategories) => {
    handleChange("categories", newCategories);
  };

  const handleCommunityImpactChange = (field, value) => {
    handleChange("communityImpact", {
      ...data.communityImpact,
      [field]: value,
    });
  };

  const handleAchievementsChange = (newAchievements) => {
    handleChange("communityImpact", {
      ...data.communityImpact,
      achievements: newAchievements,
    });
  };

  const handleUpcomingActivitiesChange = (field, value) => {
    handleChange("upcomingActivities", {
      ...data.upcomingActivities,
      [field]: value,
    });
  };

  const handleUpcomingEventsChange = (newEvents) => {
    handleChange("upcomingActivities", {
      ...data.upcomingActivities,
      events: newEvents,
    });
  };

  const renderCategory = (category, onCategoryChange) => {
    return (
      <div className="space-y-4">
        <TextField
          label="Icon"
          value={category.icon || ""}
          onChange={(value) => onCategoryChange({ ...category, icon: value })}
          placeholder="Icon class (e.g., ri-presentation-line)"
        />
        <TextField
          label="Title"
          value={category.title || ""}
          onChange={(value) => onCategoryChange({ ...category, title: value })}
          placeholder="Category title"
        />
        <TextArea
          label="Description"
          value={category.description || ""}
          onChange={(value) =>
            onCategoryChange({ ...category, description: value })
          }
          placeholder="Category description"
          rows={3}
        />
      </div>
    );
  };

  const renderAchievement = (achievement, onAchievementChange, index) => {
    return (
      <TextField
        label={`Achievement ${index + 1}`}
        value={achievement || ""}
        onChange={onAchievementChange}
        placeholder="Achievement description"
      />
    );
  };

  const renderUpcomingEvent = (event, onEventChange) => {
    return (
      <div className="space-y-4">
        <TextField
          label="Event Title"
          value={event.title || ""}
          onChange={(value) => onEventChange({ ...event, title: value })}
          placeholder="Activity title"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {event.date ? (
            <TextField
              label="Date"
              value={event.date || ""}
              onChange={(value) => onEventChange({ ...event, date: value })}
              placeholder="Event date"
            />
          ) : (
            <TextField
              label="Schedule"
              value={event.schedule || ""}
              onChange={(value) => onEventChange({ ...event, schedule: value })}
              placeholder="Recurring schedule"
            />
          )}
          <TextField
            label="Time"
            value={event.time || ""}
            onChange={(value) => onEventChange({ ...event, time: value })}
            placeholder="Event time"
          />
        </div>
        <TextField
          label="Location"
          value={event.location || ""}
          onChange={(value) => onEventChange({ ...event, location: value })}
          placeholder="Event location"
        />
      </div>
    );
  };

  return (
    <div>
      <SectionHeader
        title="Activities Section"
        subtitle="Edit information about AWS User Group activities"
      />

      <form className="space-y-8">
        <TextField
          label="Section Title"
          id="activities-title"
          value={data.title || ""}
          onChange={(value) => handleChange("title", value)}
          placeholder="Enter section title"
        />

        <TextArea
          label="Section Subtitle"
          id="activities-subtitle"
          value={data.subtitle || ""}
          onChange={(value) => handleChange("subtitle", value)}
          placeholder="Enter section subtitle"
          rows={3}
        />

        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold text-primary mb-4">
            Activity Categories
          </h3>
          <ArrayEditor
            items={data.categories || []}
            onChange={handleCategoriesChange}
            renderItem={renderCategory}
            addButtonText="Add Category"
          />
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold text-primary mb-4">
            Community Impact
          </h3>
          <TextField
            label="Impact Title"
            id="impact-title"
            value={data.communityImpact.title || ""}
            onChange={(value) => handleCommunityImpactChange("title", value)}
            placeholder="Community impact title"
          />

          <TextArea
            label="Impact Description"
            id="impact-description"
            value={data.communityImpact.description || ""}
            onChange={(value) =>
              handleCommunityImpactChange("description", value)
            }
            placeholder="Community impact description"
            rows={3}
          />

          <ArrayEditor
            label="Achievements"
            items={data.communityImpact.achievements || []}
            onChange={handleAchievementsChange}
            renderItem={renderAchievement}
            addButtonText="Add Achievement"
          />

          <ImageUploader
            label="Impact Image"
            id="impact-image"
            value={data.communityImpact.image || ""}
            onChange={(value) => handleCommunityImpactChange("image", value)}
            previewSize="medium"
          />

          <TextField
            label="CTA Text"
            id="impact-cta"
            value={data.communityImpact.ctaText || ""}
            onChange={(value) => handleCommunityImpactChange("ctaText", value)}
            placeholder="Call-to-action button text"
          />
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold text-primary mb-4">
            Upcoming Activities
          </h3>
          <TextField
            label="Title"
            id="upcoming-title"
            value={data.upcomingActivities.title || ""}
            onChange={(value) => handleUpcomingActivitiesChange("title", value)}
            placeholder="Upcoming activities title"
          />

          <ArrayEditor
            label="Activity Events"
            items={data.upcomingActivities.events || []}
            onChange={handleUpcomingEventsChange}
            renderItem={renderUpcomingEvent}
            addButtonText="Add Activity"
          />

          <TextField
            label="CTA Text"
            id="upcoming-cta"
            value={data.upcomingActivities.ctaText || ""}
            onChange={(value) =>
              handleUpcomingActivitiesChange("ctaText", value)
            }
            placeholder="Call-to-action button text"
          />
        </div>
      </form>
    </div>
  );
}

export default ActivitiesSection;

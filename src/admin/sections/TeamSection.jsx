import React from 'react';
import TextField from '../components/TextField';
import TextArea from '../components/TextArea';
import ImageUploader from '../components/ImageUploader';
import ArrayEditor from '../components/ArrayEditor';
import SectionHeader from '../../components/shared/SectionHeader';

function TeamSection({ data, onChange }) {
  const handleChange = (field, value) => {
    onChange({
      ...data,
      [field]: value
    });
  };

  const handleTeamMemberChange = (newMembers) => {
    handleChange('members', newMembers);
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
            <option value="linkedin">LinkedIn</option>
            <option value="twitter">Twitter</option>
            <option value="github">GitHub</option>
            <option value="instagram">Instagram</option>
            <option value="facebook">Facebook</option>
            <option value="website">Website</option>
          </select>
        </div>
        <TextField
          label="Icon"
          value={link.icon || ''}
          onChange={(value) => onLinkChange({ ...link, icon: value })}
          placeholder="Icon class (e.g., ri-linkedin-fill)"
        />
        <TextField
          label="URL"
          value={link.url || ''}
          onChange={(value) => onLinkChange({ ...link, url: value })}
          placeholder="Profile URL"
        />
      </div>
    );
  };

  const renderTeamMember = (member, onMemberChange) => {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextField
            label="Name"
            value={member.name || ''}
            onChange={(value) => onMemberChange({ ...member, name: value })}
            placeholder="Team member name"
            required
          />
          <TextField
            label="Role"
            value={member.role || ''}
            onChange={(value) => onMemberChange({ ...member, role: value })}
            placeholder="Team member role/position"
          />
        </div>
        
        <TextArea
          label="Bio"
          value={member.bio || ''}
          onChange={(value) => onMemberChange({ ...member, bio: value })}
          placeholder="Short biography"
          rows={3}
        />
        
        <ImageUploader
          label="Profile Image"
          value={member.image || ''}
          onChange={(value) => onMemberChange({ ...member, image: value })}
          previewSize="small"
        />
        
        <div>
          <h4 className="text-md font-medium text-gray-700 mb-2">Social Links</h4>
          <ArrayEditor
            items={member.social || []}
            onChange={(social) => onMemberChange({ ...member, social })}
            renderItem={renderSocialLink}
            addButtonText="Add Social Link"
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      <SectionHeader title="Team Section" subtitle="Manage your team members" />
      
      <form className="space-y-8">
        <TextField
          label="Section Title"
          id="team-title"
          value={data.title}
          onChange={(value) => handleChange('title', value)}
          placeholder="Enter section title"
        />
        
        <TextArea
          label="Section Subtitle"
          id="team-subtitle"
          value={data.subtitle}
          onChange={(value) => handleChange('subtitle', value)}
          placeholder="Enter section subtitle"
        />
        
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold text-primary mb-4">Team Members</h3>
          <ArrayEditor
            label="Members"
            items={data.members}
            onChange={handleTeamMemberChange}
            renderItem={renderTeamMember}
            addButtonText="Add Team Member"
          />
        </div>
      </form>
    </div>
  );
}

export default TeamSection;
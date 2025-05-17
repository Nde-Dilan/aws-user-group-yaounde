import React from 'react';
import Icon from '../shared/Icon';
import useWebsiteData from '../../data/useWebsiteData';

const TeamMember = ({ member }) => {
    const { resolveImageUrl } = useWebsiteData();
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-64">
      <div 
        className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4" 
        style={{
          backgroundImage: `url('${resolveImageUrl(member.image)}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <h3 className="text-xl font-bold text-primary text-center mb-1">{member.name}</h3>
      <p className="text-secondary text-center mb-3">{member.role}</p>
      <p className="text-gray-600 text-sm text-center mb-4">{member.bio}</p>
      <div className="flex justify-center gap-3">
        {member.social.map((socialItem, index) => (
          <a 
            key={index}
            href={socialItem.url} 
            className="text-gray-500 hover:text-secondary transition-colors"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <Icon name={socialItem.icon} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
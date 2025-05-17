import React from 'react';
import FormField from './FormField';
import Icon from '../../components/shared/Icon';

function ArrayEditor({ 
  label, 
  items, 
  onChange, 
  renderItem, 
  addButtonText = "Add Item", 
  error = null,
  className = ""
}) {
  const handleAddItem = () => {
    onChange([...items, {}]);
  };

  const handleRemoveItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    onChange(newItems);
  };

  const handleItemChange = (index, updatedItem) => {
    const newItems = [...items];
    newItems[index] = updatedItem;
    onChange(newItems);
  };

  return (
    <FormField label={label} error={error} className={className}>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 relative">
            <button
              type="button"
              onClick={() => handleRemoveItem(index)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition-colors"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <Icon name="ri-delete-bin-line" />
              </div>
            </button>
            {renderItem(item, (updatedItem) => handleItemChange(index, updatedItem), index)}
          </div>
        ))}
        
        <button
          type="button"
          onClick={handleAddItem}
          className="mt-4 bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-button flex items-center"
        >
          <Icon name="ri-add-line" className="mr-2" />
          {addButtonText}
        </button>
      </div>
    </FormField>
  );
}

export default ArrayEditor;
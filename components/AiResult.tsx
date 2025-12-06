
import React from 'react';
import { Modal } from './Modal';
import { Sparkles } from 'lucide-react';

interface AiResultProps {
  isOpen: boolean;
  onClose: () => void;
  query: string;
  response: string;
  t: any;
}

export const AiResult: React.FC<AiResultProps> = ({ isOpen, onClose, query, response, t }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t.aiResult}>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 flex items-center">
          <Sparkles className="mr-2 h-5 w-5 text-purple-500" />
          {query}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
          {response}
        </p>
      </div>
    </Modal>
  );
};

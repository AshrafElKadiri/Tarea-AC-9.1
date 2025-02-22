import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>

        <div className="fixed inset-0 bg-black bg-opacity-50" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
            <Dialog.Title className="text-lg font-bold"><FormattedMessage id="app.label.confirmation" /></Dialog.Title>
            <p className="mt-2 text-gray-600"><FormattedMessage id="app.label.question" /></p>
            
            <div className="mt-4 flex justify-end space-x-2">
              <button 
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
                onClick={onClose}
              >
                <FormattedMessage id="app.label.cancel" />
              </button>
              <button 
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
                onClick={onClose}
              >
                <FormattedMessage id="app.label.accept" />
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
}

// File Upload Security Component
import { useState } from 'react';
import { validateFileType } from '@/lib/security';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  allowedTypes?: string[];
  maxSizeMB?: number;
}

export function SecureFileUpload({ 
  onFileSelect, 
  allowedTypes = ['.pdf', '.jpg', '.jpeg', '.png'],
  maxSizeMB = 5 
}: FileUploadProps) {
  const [error, setError] = useState<string | null>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Check file type
    if (!validateFileType(file.name)) {
      setError(`نوع الملف غير مسموح به. الأنواع المسموح بها: ${allowedTypes.join(', ')}`);
      return;
    }
    
    // Check file size
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxSizeMB) {
      setError(`حجم الملف كبير جدًا. الحد الأقصى المسموح به: ${maxSizeMB} ميجابايت`);
      return;
    }
    
    // File is valid, pass it to the parent component
    onFileSelect(file);
  };
  
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        تحميل ملف
      </label>
      <input
        type="file"
        onChange={handleFileChange}
        accept={allowedTypes.join(',')}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0 file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100
                  dark:file:bg-gray-700 dark:file:text-gray-200"
      />
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
        الملفات المسموح بها: {allowedTypes.join(', ')} (الحد الأقصى: {maxSizeMB} ميجابايت)
      </p>
    </div>
  );
}

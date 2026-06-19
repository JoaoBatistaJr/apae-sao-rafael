// types/assistive.d.ts
interface Window {
  assistive: {
    init: (options: Record<string, unknown>) => void;
  };
}

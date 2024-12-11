import { InjectionToken } from '@angular/core';
import { Editor } from '@tiptap/core';

export interface TextEditor {
  api: TextEditorAPI;
}

export interface TextEditorAPI {
  isCommandDisabled: (command: string) => boolean | null;
  isActive: (command: string) => boolean | null;
  runCommand: (command: string) => void;
  editor: () => Editor;
}

export const TEXT_EDITOR = new InjectionToken('TEXT_EDITOR');
export const TEXT_EDITOR_BUBBLE_MENU = new InjectionToken('TEXT_EDITOR_BUBBLE_MENU');

import { InjectionToken } from '@angular/core';
import { Editor } from '@tiptap/core';

export interface CommentEditor {
  api: CommentEditorAPI;
}

export interface CommentEditorAPI {
  isCommandDisabled: (command: string) => boolean | null;
  isActive: (command: string) => boolean | null;
  runCommand: (command: string) => void;
  editor: () => Editor;
  isToolbarActive: () => boolean;
  toggleToolbar: () => void;
}

export const COMMENT_EDITOR = new InjectionToken('COMMENT_EDITOR');
export const COMMENT_EDITOR_BUBBLE_MENU = new InjectionToken('COMMENT_EDITOR_BUBBLE_MENU');

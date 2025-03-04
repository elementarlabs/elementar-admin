import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[emrKanbanItemDef]'
})
export class KanbanItemDefDirective {
  readonly templateRef = inject(TemplateRef);
}

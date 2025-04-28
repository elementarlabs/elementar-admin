import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./common/common.component').then(c => c.CommonComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'overview'
      },
      {
        path: 'customization',
        loadChildren: () => import('./customization/customization.module').then(m => m.CustomizationModule)
      },
      {
        path: 'forms/password-strength',
        loadChildren: () => import('./forms/password-strength/password-strength.module').then(m => m.PasswordStrengthModule)
      },
      {
        path: 'forms/autocomplete',
        loadChildren: () => import('./forms/autocomplete/autocomplete.module').then(m => m.AutocompleteModule)
      },
      {
        path: 'forms/buttons',
        loadChildren: () => import('./forms/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'forms/input',
        loadChildren: () => import('./forms/input/input.module').then(m => m.InputModule)
      },
      {
        path: 'forms/phone-input',
        loadChildren: () => import('./forms/phone-input/phone-input.module').then(m => m.PhoneInputModule)
      },
      {
        path: 'forms/slide-toggle',
        loadChildren: () => import('./forms/slide-toggle/slide-toggle.module').then(m => m.SlideToggleModule)
      },
      {
        path: 'forms/checkbox',
        loadChildren: () => import('./forms/checkbox/checkbox.module').then(m => m.CheckboxModule)
      },
      {
        path: 'forms/radio',
        loadChildren: () => import('./forms/radio/radio.module').then(m => m.RadioModule)
      },
      {
        path: 'forms/select',
        loadChildren: () => import('./forms/select/select.module').then(m => m.SelectModule)
      },
      {
        path: 'forms/segmented',
        loadChildren: () => import('./forms/segmented/segmented.module').then(m => m.SegmentedModule)
      },
      {
        path: 'forms/pin-input',
        loadChildren: () => import('./forms/pin-input/pin-input.module').then(m => m.PinInputModule)
      },
      {
        path: 'forms/button-toggle',
        loadChildren: () => import('./forms/button-toggle/button-toggle.module').then(m => m.ButtonToggleModule)
      },
      {
        path: 'forms/number-input',
        loadChildren: () => import('./forms/number-input/number-input.module').then(m => m.NumberInputModule)
      },
      {
        path: 'components/cookie-popup',
        loadChildren: () => import('./components/cookie-popup/cookie-popup.module').then(m => m.CookiePopupModule)
      },
      {
        path: 'components/action-required',
        loadChildren: () => import('./components/action-required/action-required.module').then(m => m.ActionRequiredModule)
      },
      {
        path: 'components/avatar',
        loadChildren: () => import('./components/avatar/avatar.module').then(m => m.AvatarModule)
      },
      {
        path: 'components/timeline',
        loadChildren: () => import('./components/timeline/timeline.module').then(m => m.TimelineModule)
      },
      {
        path: 'components/badge',
        loadChildren: () => import('./components/badge/badge.module').then(m => m.BadgeModule)
      },
      {
        path: 'components/sidebar',
        loadChildren: () => import('./components/sidebar/sidebar.module').then(m => m.SidebarModule)
      },
      {
        path: 'components/bottom-sheet',
        loadChildren: () => import('./components/bottom-sheet/bottom-sheet.module').then(m => m.BottomSheetModule)
      },
      {
        path: 'components/card',
        loadChildren: () => import('./components/card/card.module').then(m => m.CardModule)
      },
      {
        path: 'components/card-overlay',
        loadChildren: () => import('./components/card-overlay/card-overlay.module').then(m => m.CardOverlayModule)
      },
      {
        path: 'components/carousel',
        loadChildren: () => import('./components/carousel/carousel.module').then(m => m.CarouselModule)
      },
      {
        path: 'components/chips',
        loadChildren: () => import('./components/chips/chips.module').then(m => m.ChipsModule)
      },
      {
        path: 'components/chips',
        loadChildren: () => import('./components/chips/chips.module').then(m => m.ChipsModule)
      },
      {
        path: 'components/emoji-picker',
        loadChildren: () => import('./components/emoji-picker/emoji-picker.module').then(m => m.EmojiPickerModule)
      },
      {
        path: 'components/datepicker',
        loadChildren: () => import('./components/datepicker/datepicker.module').then(m => m.DatepickerModule)
      },
      {
        path: 'components/timepicker',
        loadChildren: () => import('./components/timepicker/timepicker.module').then(m => m.TimepickerModule)
      },
      {
        path: 'components/icon',
        loadChildren: () => import('./components/icon/icon.module').then(m => m.IconModule)
      },
      {
        path: 'components/dialog',
        loadChildren: () => import('./components/dialog/dialog.module').then(m => m.DialogModule)
      },
      {
        path: 'components/divider',
        loadChildren: () => import('./components/divider/divider.module').then(m => m.DividerModule)
      },
      {
        path: 'components/content-fade',
        loadChildren: () => import('./components/content-fade/content-fade.module').then(m => m.ContentFadeModule)
      },
      {
        path: 'components/expansion-panel',
        loadChildren: () => import('./components/expansion-panel/expansion-panel.module').then(m => m.ExpansionPanelModule)
      },
      {
        path: 'components/list',
        loadChildren: () => import('./components/list/list.module').then(m => m.ListModule)
      },
      {
        path: 'components/menu',
        loadChildren: () => import('./components/menu/menu.module').then(m => m.MenuModule)
      },
      {
        path: 'components/paginator',
        loadChildren: () => import('./components/paginator/paginator.module').then(m => m.PaginatorModule)
      },
      {
        path: 'components/progress-bar',
        loadChildren: () => import('./components/progress-bar/progress-bar.module').then(m => m.ProgressBarModule)
      },
      {
        path: 'components/resizable-container',
        loadChildren: () => import('./components/resizable-container/resizable-container.module').then(m => m.ResizableContainerModule)
      },
      {
        path: 'components/gauge',
        loadChildren: () => import('./components/gauge/gauge.module').then(m => m.GaugeModule)
      },
      {
        path: 'components/progress-spinner',
        loadChildren: () => import('./components/progress-spinner/progress-spinner.module').then(m => m.ProgressSpinnerModule)
      },
      {
        path: 'components/slider',
        loadChildren: () => import('./components/slider/slider.module').then(m => m.SliderModule)
      },
      {
        path: 'components/thumbnail-maker',
        loadChildren: () => import('./components/thumbnail-maker/thumbnail-maker.module').then(m => m.ThumbnailMakerModule)
      },
      {
        path: 'components/expand',
        loadChildren: () => import('./components/expand/expand.module').then(m => m.ExpandModule)
      },
      {
        path: 'components/snackbar',
        loadChildren: () => import('./components/snackbar/snackbar.module').then(m => m.SnackbarModule)
      },
      {
        path: 'components/comment-editor',
        loadChildren: () => import('./components/comment-editor/comment-editor.module').then(m => m.CommentEditorModule)
      },
      {
        path: 'components/table',
        loadChildren: () => import('./components/table/table.module').then(m => m.TableModule)
      },
      {
        path: 'components/dataview',
        loadChildren: () => import('./components/dataview/dataview.module').then(m => m.DataviewModule)
      },
      {
        path: 'components/stepper',
        loadChildren: () => import('./components/stepper/stepper.module').then(m => m.StepperModule)
      },
      {
        path: 'components/tabs',
        loadChildren: () => import('./components/tabs/tabs.module').then(m => m.TabsModule)
      },
      {
        path: 'components/toolbar',
        loadChildren: () => import('./components/toolbar/toolbar.module').then(m => m.ToolbarModule)
      },
      {
        path: 'components/tooltip',
        loadChildren: () => import('./components/tooltip/tooltip.module').then(m => m.TooltipModule)
      },
      {
        path: 'components/tree',
        loadChildren: () => import('./components/tree/tree.module').then(m => m.TreeModule)
      },
      {
        path: 'components/skeleton',
        loadChildren: () => import('./components/skeleton/skeleton.module').then(m => m.SkeletonModule)
      },
      {
        path: 'components/alert',
        loadChildren: () => import('./components/alert/alert.module').then(m => m.AlertModule)
      },
      {
        path: 'components/popover',
        loadChildren: () => import('./components/popover/popover.module').then(m => m.PopoverModule)
      },
      {
        path: 'components/color-picker',
        loadChildren: () => import('./components/color-picker/color-picker.module').then(m => m.ColorPickerModule)
      },
      {
        path: 'components/brand-colors',
        loadChildren: () => import('./components/brand-colors/brand-colors.module').then(m => m.BrandColorsModule)
      },
      {
        path: 'components/upload',
        loadChildren: () => import('./components/upload/upload.module').then(m => m.UploadModule)
      },
      {
        path: 'components/command-bar',
        loadChildren: () => import('./components/command-bar/command-bar.module').then(m => m.CommandBarModule)
      },
      {
        path: 'components/filter-builder',
        loadChildren: () => import('./components/filter-builder/filter-builder.module').then(m => m.FilterBuilderModule)
      },
      {
        path: 'components/panel',
        loadChildren: () => import('./components/panel/panel.module').then(m => m.PanelModule)
      },
      {
        path: 'components/incidents',
        loadChildren: () => import('./components/incidents/incidents.module').then(m => m.IncidentsModule)
      },
      {
        path: 'components/layout',
        loadChildren: () => import('./components/layout/layout.module').then(m => m.LayoutModule)
      },
      {
        path: 'components/suggestions',
        loadChildren: () => import('./components/suggestions/suggestions.module').then(m => m.SuggestionsModule)
      },
      {
        path: 'components/announcement',
        loadChildren: () => import('./components/announcement/announcement.module').then(m => m.AnnouncementModule)
      },
      {
        path: 'components/block-state',
        loadChildren: () => import('./components/block-state/block-state.module').then(m => m.BlockStateModule)
      },
      {
        path: 'components/confirm',
        loadChildren: () => import('./components/confirm/confirm.module').then(m => m.ConfirmModule)
      },
      {
        path: 'components/image-viewer',
        loadChildren: () => import('./components/image-viewer/image-viewer.module').then(m => m.ImageViewerModule)
      },
      {
        path: 'components/image-resizer',
        loadChildren: () => import('./components/image-resizer/image-resizer.module').then(m => m.ImageResizerModule)
      },
      {
        path: 'components/marquee',
        loadChildren: () => import('./components/marquee/marquee.module').then(m => m.MarqueeModule)
      },
      {
        path: 'components/text-editor',
        loadChildren: () => import('./components/text-editor/text-editor.module').then(m => m.TextEditorModule)
      },
      {
        path: 'components/screen-loader',
        loadChildren: () => import('./components/screen-loader/screen-loader.module').then(m => m.ScreenLoaderModule)
      },
      {
        path: 'navigation/breadcrumbs',
        loadChildren: () => import('./navigation/breadcrumbs/breadcrumbs.module').then(m => m.BreadcrumbsModule)
      },
      {
        path: 'navigation/tab-panel',
        loadChildren: () => import('./navigation/tab-panel/tab-panel.module').then(m => m.TabPanelModule)
      },
      {
        path: 'navigation/navigation',
        loadChildren: () => import('./navigation/navigation/navigation.module').then(m => m.NavigationModule)
      },
      {
        path: 'navigation/rail-nav',
        loadChildren: () => import('./navigation/rail-nav/rail-nav.module').then(m => m.RailNavModule)
      },
      {
        path: 'micro-charts',
        loadChildren: () => import('./micro-charts/micro-charts.module').then(m => m.MicroChartsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

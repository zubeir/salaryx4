import paths, { rootPaths } from './paths';

export const dashboardRoutes = {
  label: 'Onboarding',
  labelDisable: false,
   children: [
    {
      name: 'Overview',
      to: paths.analytics,
    icon: 'chart-pie',
      active: true
    },
    {
      name: 'Onboarding Summary',
      to: paths.ticketsTable,
      exact: true,
      active: true,
      icon: 'table'
    }
  ]
};

export const dashboardRoutes1 = {
  label: 'Dashboard',
  labelDisable: true,
  children: [
    {
      name: 'Dashboard',
      active: true,
      icon: 'chart-pie',
      children: [
        {
          name: 'Default',
          to: rootPaths.root,
          exact: true,
          active: true
        },
        {
          name: 'Analytics',
          to: paths.analytics,
          active: true
        },
        {
          name: 'CRM',
          to: paths.crm,
          active: true
        },
        {
          name: 'E Commerce',
          to: paths.ecommerce,
          active: true
        },
        {
          name: 'LMS',
          to: paths.lms,
          active: true,
          badge: {
            type: 'success',
            text: 'New'
          }
        },
        {
          name: 'Management',
          to: paths.projectManagement,
          active: true
        },
        {
          name: 'SaaS',
          to: paths.saas,
          active: true
        },
        {
          name: 'Support desk',
          to: paths.supportDesk,
          active: true,
          badge: {
            type: 'success',
            text: 'New'
          }
        }
      ]
    }
  ]
};
export const appRoutes = {
  label: 'Postings',
  children: [
    {
      name: 'Overview',
      icon: 'calendar-alt',
      to: paths.crm,
      active: true
    },
    {
      name: 'Manage',
      icon: 'envelope-open',
      active: true,
      children: [
        {
          name: 'Summary',
          to: paths.eventList,
          active: true
        },
        {
          name: 'Post a New Job',
          to: paths.addProduct,
          //to: paths.emailDetail,
          active: true
        },
        {
          name: 'Update a Job',
          to: paths.emailCompose,
          active: true
        },
        {
          name: 'Close a position',
          to: paths.ticketsPreview,
          active: true
        }
      ]
    },
  ]
};


export const appRoutes1 = {
  label: 'app',
  children: [
    {
      name: 'Calendar',
      icon: 'calendar-alt',
      to: paths.calendar,
      active: true
    },
    {
      name: 'Chat',
      icon: 'comments',
      to: paths.chat,
      active: true
    },
    {
      name: 'Email',
      icon: 'envelope-open',
      active: true,
      children: [
        {
          name: 'Inbox',
          to: paths.emailInbox,
          active: true
        },
        {
          name: 'Email detail',
          to: paths.emailDetail,
          active: true
        },
        {
          name: 'Compose',
          to: paths.emailCompose,
          active: true
        }
      ]
    },
    {
      name: 'Events',
      icon: 'calendar-day',
      active: true,
      children: [
        {
          name: 'Create an event',
          to: paths.createEvent,
          active: true
        },
        {
          name: 'Event detail',
          to: paths.eventDetail,
          active: true
        },
        {
          name: 'Event list',
          to: paths.eventList,
          active: true
        }
      ]
    },
    {
      name: 'E Commerce',
      icon: 'shopping-cart',
      active: true,
      children: [
        {
          name: 'Product',
          active: true,
          children: [
            {
              name: 'Add a product',
              to: paths.addProduct,
              active: true
            },
            {
              name: 'Product list',
              to: paths.products('product-list'),
              active: true
            },
            {
              name: 'Product grid',
              to: paths.products('product-grid'),
              active: true
            },
            {
              name: 'Product details',
              to: paths.productDetails(),
              active: true
            }
          ]
        },
        {
          name: 'Orders',
          active: true,
          children: [
            {
              name: 'Order list',
              to: paths.orderList,
              active: true
            },
            {
              name: 'Order details',
              to: paths.orderDetails,
              active: true
            }
          ]
        },
        {
          name: 'Customers',
          to: paths.customers,
          active: true
        },
        {
          name: 'Customer details',
          to: paths.customerDetails,
          active: true
        },
        {
          name: 'Shopping cart',
          to: paths.shoppingCart,
          active: true
        },
        {
          name: 'Checkout',
          to: paths.checkout,
          active: true
        },
        {
          name: 'Billing',
          to: paths.billing,
          active: true
        },
        {
          name: 'Invoice',
          to: paths.invoice,
          active: true
        }
      ]
    },
    {
      name: 'E Learning',
      icon: 'graduation-cap',
      active: true,
      badge: {
        type: 'success',
        text: 'New'
      },
      children: [
        {
          name: 'Course',
          active: true,
          children: [
            {
              name: 'Create a course',
              to: paths.createCourse,
              active: true
            },
            {
              name: 'Course list',
              to: paths.courses('course-list'),
              active: true
            },
            {
              name: 'Course grid',
              to: paths.courses('course-grid'),
              active: true
            },
            {
              name: 'Course details',
              to: paths.courseDetails(),
              active: true
            }
          ]
        },
        {
          name: 'Student overview',
          to: paths.studentOverview,
          active: true
        },
        {
          name: 'Trainer profile',
          to: paths.trainerProfile,
          active: true
        }
      ]
    },
    {
      name: 'Kanban',
      icon: ['fab', 'trello'],
      to: paths.kanban,
      active: true
    },
    {
      name: 'Social',
      icon: 'share-alt',
      active: true,
      children: [
        {
          name: 'Feed',
          to: paths.feed,
          active: true
        },
        {
          name: 'Activity log',
          to: paths.activityLog,
          active: true
        },
        {
          name: 'Notifications',
          to: paths.notifications,
          active: true
        },
        {
          name: 'Followers',
          to: paths.followers,
          active: true
        }
      ]
    },
    {
      name: 'Support desk',
      icon: 'ticket-alt',
      active: true,
      children: [
        {
          name: 'Table view',
          to: paths.ticketsTable,
          active: true
        },
        {
          name: 'Card view',
          to: paths.ticketsCard,
          active: true
        },
        {
          name: 'Contacts',
          to: paths.contacts,
          active: true
        },
        {
          name: 'Contact details',
          to: paths.contactDetails,
          active: true
        },
        {
          name: 'Tickets preview',
          to: paths.ticketsPreview,
          active: true
        },
        {
          name: 'Quick links',
          to: paths.quickLinks,
          active: true
        },
        {
          name: 'Reports',
          to: paths.reports,
          active: true
        }
      ]
    }
  ]
};



export const pagesRoutes = {
  label: 'Others',
  children: [
    {
      name: 'Notifications',
      icon: 'flag',
      to: paths.notifications,
      active: true
    },
    {
      name: 'Communications',
      icon: 'globe',
      to: paths.chat,
      active: true
    },
    {
      name: 'Authentication',
      icon: 'lock',
      active: true,
      children: [
        {
          name: 'Simple',
          active: true,
          children: [
            {
              name: 'Login',
              to: paths.simpleLogin,
              active: true
            },
            {
              name: 'Logout',
              to: paths.simpleLogout,
              active: true
            },
            {
              name: 'Register',
              to: paths.simpleRegister,
              active: true
            },
            {
              name: 'Forgot password',
              to: paths.simpleForgotPassword,
              active: true
            },
            {
              name: 'Confirm mail',
              to: paths.simpleConfirmMail,
              active: true
            },
            {
              name: 'Reset password',
              to: paths.simpleResetPassword,
              active: true
            },
            {
              name: 'Lock screen',
              to: paths.simpleLockScreen,
              active: true
            }
          ]
        },
        {
          name: 'Card',
          active: true,
          children: [
            {
              name: 'Login',
              to: paths.cardLogin,
              active: true
            },
            {
              name: 'Logout',
              to: paths.cardLogout,
              active: true
            },
            {
              name: 'Register',
              to: paths.cardRegister,
              active: true
            },
            {
              name: 'Forgot password',
              to: paths.cardForgotPassword,
              active: true
            },
            {
              name: 'Confirm mail',
              to: paths.cardConfirmMail,
              active: true
            },
            {
              name: 'Reset password',
              to: paths.cardResetPassword,
              active: true
            },
            {
              name: 'Lock screen',
              to: paths.cardLockScreen,
              active: true
            }
          ]
        },
        {
          name: 'Split',
          active: true,
          children: [
            {
              name: 'Login',
              to: paths.splitLogin,
              active: true
            },
            {
              name: 'Logout',
              to: paths.splitLogout,
              active: true
            },
            {
              name: 'Register',
              to: paths.splitRegister,
              active: true
            },
            {
              name: 'Forgot password',
              to: paths.splitForgotPassword,
              active: true
            },
            {
              name: 'Confirm mail',
              to: paths.splitConfirmMail,
              active: true
            },
            {
              name: 'Reset password',
              to: paths.splitResetPassword,
              active: true
            },
            {
              name: 'Lock screen',
              to: paths.splitLockScreen,
              active: true
            }
          ]
        },
        {
          name: 'Wizard',
          to: paths.authWizard,
          active: true
        },
        {
          name: 'Modal',
          to: '#!',
          active: true
        }
      ]
    },
    {
      name: 'User',
      icon: 'user',
      active: true,
      children: [
        {
          name: 'Profile',
          to: paths.userProfile,
          active: true
        },
        {
          name: 'Settings',
          to: paths.userSettings,
          active: true
        }
      ]
    },
    {
      name: 'Pricing & Billing',
      icon: 'tags',
      active: true,
      children: [
        {
          name: 'Pricing default',
          to: paths.pricingDefault,
          active: true
        },
        {
          name: 'Pricing alt',
          to: paths.pricingAlt,
          active: true
        }
      ]
    },
    {
      name: 'File uploader',
      to: paths.fileUploader,
      icon: 'file-alt', //zubeir
      active: true
    },
    {
      name: 'API Integration',
      to: paths.range,
      icon: 'map', // zubeir
      active: true
    }
  ]
};

export const modulesRoutes = {
  label: 'Modules',
  active: 'false',
  children: [
    {}
  ]
};


export const modulesRoutes1 = {
  label: 'Modules',
  children: [
    {
      name: 'Forms',
      active: true,
      icon: 'file-alt',
      children: [
        {
          name: 'Basic',
          active: true,
          children: [
            {
              name: 'Form control',
              to: paths.formControl,
              active: true
            },
            {
              name: 'Input group',
              to: paths.inputGroup,
              active: true
            },
            {
              name: 'Select',
              to: paths.select,
              active: true
            },
            {
              name: 'Checks',
              to: paths.checks,
              active: true
            },
            {
              name: 'Range',
              to: paths.range,
              active: true
            },
            {
              name: 'Layout',
              to: paths.formLayout,
              active: true
            }
          ]
        },
        {
          name: 'Advance',
          active: true,
          children: [
            {
              name: 'Advance select',
              to: paths.advanceSelect,
              active: true
            },
            {
              name: 'Date picker',
              to: paths.datePicker,
              active: true
            },
            {
              name: 'Editor',
              to: paths.editor,
              active: true
            },
            {
              name: 'Emoji button',
              to: paths.emojiButton,
              active: true
            },
            {
              name: 'File uploader',
              to: paths.fileUploader,
              active: true
            },
            {
              name: 'Input mask',
              to: paths.inputMask,
              active: true
            },
            {
              name: 'Range slider',
              to: paths.rangeSlider,
              active: true
            },
            {
              name: 'Rating',
              to: paths.rating,
              active: true
            }
          ]
        },
        {
          name: 'Floating labels',
          to: paths.floatingLabels,
          active: true
        },
        {
          name: 'Wizard',
          to: paths.wizard,
          active: true
        },
        {
          name: 'Validation',
          to: paths.validation,
          active: true
        }
      ]
    },
    {
      name: 'Tables',
      icon: 'table',
      active: true,
      children: [
        {
          name: 'Basic tables',
          to: paths.basicTables,
          active: true
        },
        {
          name: 'Advance tables',
          to: paths.advanceTables,
          active: true
        }
      ]
    },
    {
      name: 'Charts',
      icon: 'chart-line',
      active: true,
      children: [
        {
          name: 'Chartjs',
          to: paths.chartjs,
          active: true
        },
        {
          name: 'D3js',
          to: paths.d3js,
          active: true,
          badge: {
            type: 'success',
            text: 'New'
          }
        },
        {
          name: 'ECharts',
          active: true,
          children: [
            {
              name: 'How to use',
              to: paths.echartsHowToUse,
              active: true
            },
            {
              name: 'Line charts',
              to: paths.lineCharts,
              active: true
            },
            {
              name: 'Bar charts',
              to: paths.barCharts,
              active: true
            },
            {
              name: 'Candlestick charts',
              to: paths.candlestickCharts,
              active: true
            },
            {
              name: 'Geo map',
              to: paths.geoMap,
              active: true
            },
            {
              name: 'Scatter charts',
              to: paths.scatterCharts,
              active: true
            },
            {
              name: 'Pie charts',
              to: paths.pieCharts,
              active: true
            },
            {
              name: 'Radar charts',
              to: paths.radarCharts,
              active: true
            },
            {
              name: 'Heatmap charts',
              to: paths.heatmapCharts,
              active: true
            }
          ]
        }
      ]
    },
    {
      name: 'Icons',
      active: true,
      icon: 'shapes',
      children: [
        {
          name: 'Font awesome',
          to: paths.fontAwesome,
          active: true
        },
        {
          name: 'React icons',
          to: paths.reactIcons,
          active: true
        }
      ]
    },
    {
      name: 'Maps',
      icon: 'map',
      active: true,
      children: [
        {
          name: 'Google map',
          to: paths.googleMap,
          active: true
        },
        {
          name: 'Leaflet map',
          to: paths.leafletMap,
          active: true
        }
      ]
    },
    {
      name: 'Components',
      active: true,
      icon: 'puzzle-piece',
      children: [
        {
          name: 'Alerts',
          to: paths.alerts,
          active: true
        },
        {
          name: 'Accordion',
          to: paths.accordion,
          active: true
        },
        {
          name: 'Animated icons',
          to: paths.animatedIcons,
          active: true
        },
        {
          name: 'Backgrounds',
          to: paths.background,
          active: true
        },
        {
          name: 'Badges',
          to: paths.badges,
          active: true
        },
        {
          name: 'Breadcrumbs',
          to: paths.breadcrumbs,
          active: true
        },
        {
          name: 'Buttons',
          to: paths.buttons,
          active: true
        },
        {
          name: 'Calendar',
          to: paths.calendar,
          active: true
        },
        {
          name: 'Cards',
          to: paths.cards,
          active: true
        },
        {
          name: 'Carousel',
          active: true,
          children: [
            {
              name: 'Bootstrap',
              to: paths.bootstrapCarousel,
              label: 'bootstrap-carousel',
              active: true
            },
            {
              name: 'Slick',
              to: paths.slickCarousel,
              active: true
            }
          ]
        },
        {
          name: 'Collapse',
          to: paths.collapse,
          active: true
        },
        {
          name: 'Cookie notice',
          to: paths.cookieNotice,
          active: true
        },
        {
          name: 'Countup',
          to: paths.countup,
          active: true
        },
        {
          name: 'Draggable',
          to: paths.draggable,
          active: true
        },
        {
          name: 'Dropdowns',
          to: paths.dropdowns,
          active: true
        },
        {
          name: 'List group',
          to: paths.listGroup,
          active: true
        },
        {
          name: 'Modals',
          to: paths.modals,
          active: true
        },
        {
          name: 'Offcanvas',
          to: paths.offcanvas,
          active: true
        },
        {
          name: 'Navs & Tabs',
          active: true,
          children: [
            {
              name: 'Navs',
              to: paths.navs,
              active: true
            },
            {
              name: 'Navbar',
              to: paths.navbar,
              active: true
            },
            {
              name: 'Vertical navbar',
              to: paths.verticalNavbar,
              active: true
            },
            {
              name: 'Top navbar',
              to: paths.topNavbar,
              active: true
            },
            {
              name: 'Double Top',
              to: paths.doubleTopNavbar,
              active: true
            },
            {
              name: 'Combo navbar',
              to: paths.comboNavbar,
              active: true
            },
            {
              name: 'Tabs',
              to: paths.tabs,
              active: true
            }
          ]
        },
        {
          name: 'Pictures',
          active: true,
          children: [
            {
              name: 'Avatar',
              to: paths.avatar,
              active: true
            },
            {
              name: 'Images',
              to: paths.images,
              active: true
            },
            {
              name: 'Figures',
              to: paths.figures,
              active: true
            },
            {
              name: 'Hoverbox',
              to: paths.hoverbox,
              active: true
            },
            {
              name: 'Lightbox',
              to: paths.lightbox,
              active: true
            }
          ]
        },
        {
          name: 'Progress Bar',
          to: paths.progressBar,
          active: true
        },
        {
          name: 'Pagination',
          to: paths.pagination,
          active: true
        },
        {
          name: 'Placeholder',
          to: paths.placeholder,
          active: true
        },
        {
          name: 'Popovers',
          to: paths.popovers,
          active: true
        },
        {
          name: 'Scrollspy',
          to: paths.scrollspy,
          active: true
        },
        {
          name: 'Search',
          to: paths.search,
          active: true
        },
        {
          name: 'Spinners',
          to: paths.spinners,
          active: true
        },
        {
          name: 'Timeline',
          to: paths.timeline,
          active: true
        },
        {
          name: 'Toasts',
          to: paths.toasts,
          active: true
        },
        {
          name: 'Tooltips',
          to: paths.tooltips,
          active: true
        },
        {
          name: 'Treeview',
          to: paths.treeview,
          active: true
        },
        {
          name: 'Typed text',
          to: paths.typedText,
          active: true
        },
        {
          name: 'Videos',
          active: true,
          children: [
            {
              name: 'Embed',
              to: paths.embedVideo,
              active: true
            },
            {
              name: 'React Player',
              to: paths.reactPlayer,
              active: true
            }
          ]
        }
      ]
    },
    {
      name: 'Utilities',
      active: true,
      icon: 'fire',
      children: [
        {
          name: 'Background',
          to: paths.backgroundColor,
          active: true
        },
        {
          name: 'Borders',
          to: paths.borders,
          active: true
        },
        {
          name: 'Colors',
          to: paths.colors,
          active: true
        },
        {
          name: 'Colored links',
          to: paths.coloredLinks,
          active: true
        },
        {
          name: 'Display',
          to: paths.display,
          active: true
        },
        {
          name: 'Flex',
          to: paths.flex,
          active: true
        },
        {
          name: 'Float',
          to: paths.float,
          active: true
        },
        {
          name: 'Grid',
          to: paths.grid,
          active: true
        },
        {
          name: 'Scroll Bar',
          to: paths.scrollBar,
          active: true
        },
        {
          name: 'Position',
          to: paths.position,
          active: true
        },
        {
          name: 'Spacing',
          to: paths.spacing,
          active: true
        },
        {
          name: 'Sizing',
          to: paths.sizing,
          active: true
        },
        {
          name: 'Stretched link',
          to: paths.stretchedLink,
          active: true
        },
        {
          name: 'Text truncation',
          to: paths.textTruncation,
          active: true
        },
        {
          name: 'Typography',
          to: paths.typography,
          active: true
        },
        {
          name: 'Vertical align',
          to: paths.verticalAlign,
          active: true
        },
        {
          name: 'Visibility',
          to: paths.visibility,
          active: true
        }
      ]
    },
    {
      name: 'Widgets',
      icon: 'poll',
      to: paths.widgets,
      active: true
    },
    {
      name: 'Multi level',
      active: true,
      icon: 'layer-group',
      children: [
        {
          name: 'Level two',
          active: true,
          children: [
            {
              name: 'Item 1',
              active: true,
              to: '#!'
            },
            {
              name: 'Item 2',
              active: true,
              to: '#!'
            }
          ]
        },
        {
          name: 'Level three',
          active: true,
          children: [
            {
              name: 'Item 3',
              active: true,
              to: '#!'
            },
            {
              name: 'Item 4',
              active: true,
              children: [
                {
                  name: 'Item 5',
                  active: true,
                  to: '#!'
                },
                {
                  name: 'Item 6',
                  active: true,
                  to: '#!'
                }
              ]
            }
          ]
        },
        {
          name: 'Level four',
          active: true,
          children: [
            {
              name: 'Item 6',
              active: true,
              to: '#!'
            },
            {
              name: 'Item 7',
              active: true,
              children: [
                {
                  name: 'Item 8',
                  active: true,
                  to: '#!'
                },
                {
                  name: 'Item 9',
                  active: true,
                  children: [
                    {
                      name: 'Item 10',
                      active: true,
                      to: '#!'
                    },
                    {
                      name: 'Item 11',
                      active: true,
                      to: '#!'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export const documentationRoutes = {
  label: 'documentation',
  children: [
    {
      name: 'Getting started',
      icon: 'rocket',
      to: paths.gettingStarted,
      active: true
    },
    {
      name: 'Customization',
      active: true,
      icon: 'wrench',
      children: [
        {
          name: 'Configuration',
          to: paths.configuration,
          active: true
        },
        {
          name: 'Styling',
          to: paths.styling,
          active: true
        },
        {
          name: 'Dark mode',
          to: paths.darkMode,
          active: true
        },
        {
          name: 'Plugin',
          to: paths.plugin,
          active: true
        }
      ]
    },
    {
      name: 'Faq',
      icon: 'question-circle',
      to: paths.faq,
      active: true
    },
    {
      name: 'Design file',
      icon: 'palette',
      to: paths.designFile,
      active: true
    },
    {
      name: 'Changelog',
      icon: 'code-branch',
      to: paths.changelog,
      active: true
    }
  ]
};

export default [
  dashboardRoutes,
  appRoutes,
  pagesRoutes
//  modulesRoutes,
//  documentationRoutes
];

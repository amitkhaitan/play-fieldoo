export const webFlowAnimationSetup = {
  events: {
    e: {
      id: 'e',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-6'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.faq-question',
        originalId: '5d554845f5538340c5d9ed91|9d4826ae-fd8c-a0a2-0a17-3984f56549a8',
        appliesTo: 'CLASS'
      },
      config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
      createdOn: 1543891273196
    },
    'e-2': {
      id: 'e-2',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-2',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-5'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.faq-question',
        originalId: '5d554845f5538340c5d9ed91|9d4826ae-fd8c-a0a2-0a17-3984f56549a8',
        appliesTo: 'CLASS'
      },
      config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
      createdOn: 1543891273198
    },
    'e-3': {
      id: 'e-3',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-3',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-4'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.faq-question-2',
        originalId: '5d554845f5538340c5d9ed91|eaf388a0-12cc-15e8-8472-24a3a744c48d',
        appliesTo: 'CLASS'
      },
      config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
      createdOn: 1543891273196
    },
    'e-4': {
      id: 'e-4',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-4',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-3'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.faq-question-2',
        originalId: '5d554845f5538340c5d9ed91|eaf388a0-12cc-15e8-8472-24a3a744c48d',
        appliesTo: 'CLASS'
      },
      config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
      createdOn: 1543891273198
    },
    'e-5': {
      id: 'e-5',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-5',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-6'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: { appliesTo: 'ELEMENT', styleBlockIds: [], id: '21e2e3ea-afc1-6746-b745-d92dc9da454f' },
      config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
      createdOn: 1538192616629
    },
    'e-6': {
      id: 'e-6',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-6',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-5'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: { appliesTo: 'ELEMENT', styleBlockIds: [], id: '21e2e3ea-afc1-6746-b745-d92dc9da454f' },
      config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
      createdOn: 1538192616629
    }
  },
  actionLists: {
    a: {
      id: 'a',
      title: 'FAQ Open',
      actionItemGroups: [{
        actionItems: [{
          id: 'a-n',
          actionTypeId: 'STYLE_SIZE',
          config: {
            delay: 0,
            easing: '',
            duration: 500,
            locked: false,
            target: { useEventTarget: 'SIBLINGS', selector: '.faq-answer', selectorGuids: ['af0db55b-3935-cc49-bdc8-d9d7172ebc17'] },
            heightValue: 0,
            widthUnit: 'PX',
            heightUnit: 'PX'
          }
        }]
      }, {
        actionItems: [{
          id: 'a-n-2',
          actionTypeId: 'STYLE_SIZE',
          config: {
            delay: 0,
            easing: 'easeInOut',
            duration: 300,
            locked: false,
            target: { useEventTarget: 'SIBLINGS', selector: '.faq-answer', selectorGuids: ['af0db55b-3935-cc49-bdc8-d9d7172ebc17'] },
            heightValue: 0,
            widthUnit: 'PX',
            heightUnit: 'AUTO'
          }
        }, {
          id: 'a-n-3',
          actionTypeId: 'STYLE_SIZE',
          config: {
            delay: 0,
            easing: '',
            duration: 500,
            locked: false,
            target: { useEventTarget: 'CHILDREN', selector: '.faq-plus-l', selectorGuids: ['af0db55b-3935-cc49-bdc8-d9d7172ebc10'] },
            heightValue: 0,
            widthUnit: 'PX',
            heightUnit: '%'
          }
        }, {
          id: 'a-n-4',
          actionTypeId: 'TRANSFORM_ROTATE',
          config: {
            delay: 0,
            easing: 'inOutBack',
            duration: 500,
            target: {
              useEventTarget: 'CHILDREN',
              selector: '.faq-plus-wrap',
              selectorGuids: ['af0db55b-3935-cc49-bdc8-d9d7172ebc11']
            },
            zValue: 180,
            xUnit: 'DEG',
            yUnit: 'DEG',
            zUnit: 'DEG'
          }
        }]
      }],
      createdOn: 1543891276079,
      useFirstGroupAsInitialState: true
    },
    'a-2': {
      id: 'a-2',
      title: 'FAQ Close',
      actionItemGroups: [{
        actionItems: [{
          id: 'a-2-n',
          actionTypeId: 'STYLE_SIZE',
          config: {
            delay: 0,
            easing: 'easeInOut',
            duration: 300,
            locked: false,
            target: { useEventTarget: 'SIBLINGS', selector: '.faq-answer', selectorGuids: ['af0db55b-3935-cc49-bdc8-d9d7172ebc17'] },
            heightValue: 0,
            widthUnit: 'PX',
            heightUnit: 'PX'
          }
        }, {
          id: 'a-2-n-2',
          actionTypeId: 'STYLE_SIZE',
          config: {
            delay: 0,
            easing: '',
            duration: 300,
            locked: false,
            target: { useEventTarget: 'CHILDREN', selector: '.faq-plus-l', selectorGuids: ['af0db55b-3935-cc49-bdc8-d9d7172ebc10'] },
            heightValue: 100,
            widthUnit: 'PX',
            heightUnit: '%'
          }
        }, {
          id: 'a-2-n-3',
          actionTypeId: 'TRANSFORM_ROTATE',
          config: {
            delay: 0,
            easing: 'inOutBack',
            duration: 500,
            target: {
              useEventTarget: 'CHILDREN',
              selector: '.faq-plus-wrap',
              selectorGuids: ['af0db55b-3935-cc49-bdc8-d9d7172ebc11']
            },
            zValue: 0,
            xUnit: 'DEG',
            yUnit: 'DEG',
            zUnit: 'DEG'
          }
        }]
      }],
      createdOn: 1543891276079,
      useFirstGroupAsInitialState: false
    },
    'a-3': {
      id: 'a-3',
      title: 'FAQ Open 2',
      actionItemGroups: [{
        actionItems: [{
          id: 'a-3-n',
          actionTypeId: 'STYLE_SIZE',
          config: {
            delay: 0,
            easing: '',
            duration: 500,
            locked: false,
            target: {
              useEventTarget: 'SIBLINGS',
              selector: '.faq-answer-2',
              selectorGuids: ['ab2d6f23-8c08-b704-5083-474ad217391f']
            },
            heightValue: 0,
            widthUnit: 'PX',
            heightUnit: 'PX'
          }
        }]
      }, {
        actionItems: [{
          id: 'a-3-n-2',
          actionTypeId: 'STYLE_SIZE',
          config: {
            delay: 0,
            easing: 'easeInOut',
            duration: 300,
            locked: false,
            target: {
              useEventTarget: 'SIBLINGS',
              selector: '.faq-answer-2',
              selectorGuids: ['ab2d6f23-8c08-b704-5083-474ad217391f']
            },
            heightValue: 0,
            widthUnit: 'PX',
            heightUnit: 'AUTO'
          }
        }, {
          id: 'a-3-n-3',
          actionTypeId: 'STYLE_SIZE',
          config: {
            delay: 0,
            easing: '',
            duration: 500,
            locked: false,
            target: { useEventTarget: 'CHILDREN', selector: '.faq-plus-l', selectorGuids: ['af0db55b-3935-cc49-bdc8-d9d7172ebc10'] },
            heightValue: 0,
            widthUnit: 'PX',
            heightUnit: '%'
          }
        }, {
          id: 'a-3-n-4',
          actionTypeId: 'TRANSFORM_ROTATE',
          config: {
            delay: 0,
            easing: 'inOutBack',
            duration: 500,
            target: {
              useEventTarget: 'CHILDREN',
              selector: '.faq-plus-wrap-2',
              selectorGuids: ['ab2d6f23-8c08-b704-5083-474ad217391a']
            },
            zValue: 180,
            xUnit: 'DEG',
            yUnit: 'DEG',
            zUnit: 'DEG'
          }
        }]
      }],
      createdOn: 1543891276079,
      useFirstGroupAsInitialState: true
    },
    'a-4': {
      id: 'a-4',
      title: 'FAQ Close 2',
      actionItemGroups: [{
        actionItems: [{
          id: 'a-4-n',
          actionTypeId: 'STYLE_SIZE',
          config: {
            delay: 0,
            easing: 'easeInOut',
            duration: 300,
            locked: false,
            target: {
              useEventTarget: 'SIBLINGS',
              selector: '.faq-answer-2',
              selectorGuids: ['ab2d6f23-8c08-b704-5083-474ad217391f']
            },
            heightValue: 0,
            widthUnit: 'PX',
            heightUnit: 'PX'
          }
        }, {
          id: 'a-4-n-2',
          actionTypeId: 'STYLE_SIZE',
          config: {
            delay: 0,
            easing: '',
            duration: 300,
            locked: false,
            target: { useEventTarget: 'CHILDREN', selector: '.faq-plus-l', selectorGuids: ['af0db55b-3935-cc49-bdc8-d9d7172ebc10'] },
            heightValue: 100,
            widthUnit: 'PX',
            heightUnit: '%'
          }
        }, {
          id: 'a-4-n-3',
          actionTypeId: 'TRANSFORM_ROTATE',
          config: {
            delay: 0,
            easing: 'inOutBack',
            duration: 500,
            target: {
              useEventTarget: 'CHILDREN',
              selector: '.faq-plus-wrap-2',
              selectorGuids: ['ab2d6f23-8c08-b704-5083-474ad217391a']
            },
            zValue: 0,
            xUnit: 'DEG',
            yUnit: 'DEG',
            zUnit: 'DEG'
          }
        }]
      }],
      createdOn: 1543891276079,
      useFirstGroupAsInitialState: false
    },
    'a-5': {
      id: 'a-5',
      title: 'Burger 3 Open 3',
      actionItemGroups: [{
        actionItems: [{
          id: 'a-5-n',
          actionTypeId: 'STYLE_SIZE',
          config: {
            delay: 0,
            easing: 'inQuint',
            duration: 300,
            locked: false,
            target: { id: '21e2e3ea-afc1-6746-b745-d92dc9da4551' },
            widthValue: 0,
            widthUnit: 'PX',
            heightUnit: 'PX'
          }
        }, {
          id: 'a-5-n-2',
          actionTypeId: 'STYLE_SIZE',
          config: {
            delay: 0,
            easing: 'inQuint',
            duration: 300,
            locked: false,
            target: { id: '21e2e3ea-afc1-6746-b745-d92dc9da4555' },
            widthValue: 0,
            widthUnit: 'PX',
            heightUnit: 'PX'
          }
        }]
      }, {
        actionItems: [{
          id: 'a-5-n-3',
          actionTypeId: 'GENERAL_DISPLAY',
          config: { delay: 0, easing: '', duration: 0, value: 'block', target: { id: '21e2e3ea-afc1-6746-b745-d92dc9da4554' } }
        }]
      }, {
        actionItems: [{
          id: 'a-5-n-4',
          actionTypeId: 'TRANSFORM_ROTATE',
          config: {
            delay: 0,
            easing: 'inOutQuint',
            duration: 500,
            target: { id: '21e2e3ea-afc1-6746-b745-d92dc9da4554' },
            zValue: 90,
            xUnit: 'DEG',
            yUnit: 'DEG',
            zUnit: 'DEG'
          }
        }, {
          id: 'a-5-n-5',
          actionTypeId: 'TRANSFORM_ROTATE',
          config: {
            delay: 0,
            easing: 'inOutQuint',
            duration: 500,
            target: { id: '21e2e3ea-afc1-6746-b745-d92dc9da4552' },
            zValue: 45,
            xUnit: 'DEG',
            yUnit: 'DEG',
            zUnit: 'DEG'
          }
        }]
      }],
      createdOn: 1538192619986,
      useFirstGroupAsInitialState: false
    },
    'a-6': {
      id: 'a-6',
      title: 'Burger 3 Open 4',
      actionItemGroups: [{
        actionItems: [{
          id: 'a-6-n',
          actionTypeId: 'TRANSFORM_ROTATE',
          config: {
            delay: 0,
            easing: 'inOutQuint',
            duration: 500,
            target: { id: '21e2e3ea-afc1-6746-b745-d92dc9da4554' },
            zValue: 0,
            xUnit: 'DEG',
            yUnit: 'DEG',
            zUnit: 'DEG'
          }
        }, {
          id: 'a-6-n-2',
          actionTypeId: 'TRANSFORM_ROTATE',
          config: {
            delay: 0,
            easing: 'inOutQuint',
            duration: 500,
            target: { id: '21e2e3ea-afc1-6746-b745-d92dc9da4552' },
            zValue: 0,
            xUnit: 'DEG',
            yUnit: 'DEG',
            zUnit: 'DEG'
          }
        }]
      }, {
        actionItems: [{
          id: 'a-6-n-3',
          actionTypeId: 'STYLE_SIZE',
          config: {
            delay: 0,
            easing: 'easeOut',
            duration: 500,
            locked: false,
            target: { id: '21e2e3ea-afc1-6746-b745-d92dc9da4555' },
            widthValue: 30,
            widthUnit: 'PX',
            heightUnit: 'PX'
          }
        }, {
          id: 'a-6-n-4',
          actionTypeId: 'STYLE_SIZE',
          config: {
            delay: 0,
            easing: 'easeOut',
            duration: 500,
            locked: false,
            target: { id: '21e2e3ea-afc1-6746-b745-d92dc9da4551' },
            widthValue: 30,
            widthUnit: 'PX',
            heightUnit: 'PX'
          }
        }]
      }],
      createdOn: 1538192619986,
      useFirstGroupAsInitialState: false
    }
  },
  site: {
    mediaQueries: [{ key: 'main', min: 992, max: 10000 }, { key: 'medium', min: 768, max: 991 }, {
      key: 'small',
      min: 480,
      max: 767
    }, { key: 'tiny', min: 0, max: 479 }]
  }
};

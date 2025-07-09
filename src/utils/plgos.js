// Mock PLG OS SDK Implementation
// This simulates the PLG OS functionality for development purposes

class MockPLGOS {
  constructor(config) {
    this.projectId = config.projectId;
    this.environment = config.environment;
    this.events = [];
    this.isInitialized = true;
    
    console.log(`🚀 Mock PLG OS initialized:`, config);
  }

  track(eventName, properties = {}) {
    const event = {
      event: eventName,
      properties: {
        ...properties,
        timestamp: new Date().toISOString(),
        projectId: this.projectId,
        environment: this.environment
      }
    };
    
    this.events.push(event);
    console.log(`📊 PLG Event Tracked:`, event);
    
    // Simulate API call
    return Promise.resolve({ success: true, event });
  }

  trackPageView(properties = {}) {
    const pageViewEvent = {
      event: 'Page_View',
      properties: {
        ...properties,
        url: window.location.href,
        timestamp: new Date().toISOString(),
        projectId: this.projectId
      }
    };
    
    this.events.push(pageViewEvent);
    console.log(`📄 PLG Page View:`, pageViewEvent);
    
    return Promise.resolve({ success: true, event: pageViewEvent });
  }

  getEvents() {
    return this.events;
  }

  reset() {
    this.events = [];
    console.log(`🔄 PLG Events reset`);
  }
}

export const initPLG = (config) => {
  return new MockPLGOS(config);
};

export const plg = initPLG({
  projectId: 'sunset-swipe-demo',
  environment: 'development',
});
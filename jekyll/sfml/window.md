---
layout: sfml
title: Windows
---

A `sf::RenderWindow` is created with a `sf::VideoMode`, title, optional style, and optional OpenGl options.

```cpp
// Creates a window with a video mode (dimensions), title [, style [, and OpenGL options]]
sf::RenderWindow::RenderWindow(sf::VideoMode vm, std::string& title, sf::Style s, /*OpenGl options&*/);
```

A `sf::VideoMode` is created with a width, height, and depth (bits per pixel).
`sf::VideoMode` also has a function to get all valid fullscreen video modes.

```cpp
sf::VideoMode::VideoMode(unsigned int w, unsigned int h, unsigned int bpp = 32);

static const std::vector<sf::VideoMode>& getFullScreenModes();

// The width, height, and depth can be accessed as member variables
sf::VideoMode::width;
sf::VideoMode::height;
sf::VideoMode::bitsPerPixel;
```

There are several styles available to be used:

```cpp
// Styles
sf::Style::None;       // No styling, can't be combined
sf::Style::Titlebar;   // Window has a titlebar
sf::Style::Resize;     // Window can be resized and has a maximize button
sf::Style::Close;      // Window has a close button
sf::Style::Fullscreen; // Window is fullscreen, can't be combined
sf::Style::Default;    // Short for Titlebar | Resize | Close
```

Some Examples:

```cpp
// Creates a 1920 x 1080 window with the title "window 1"
sf::RenderWindow window1(sf::VideoMode(1920, 1080), "window 1");

// Creates a 1920 x 1080 window with the title "window 2" without a close button
sf::RenderWindow window2(sf::VideoMode(1920, 1080), "window 2", sf::Style::Resize | sf::Style::Titlebar)

```

Almost all of `sf::RenderWindow`'s methods are inherited from `sf::Window` and `sf::RenderTarget`:

```cpp
/* sf::Window */ {
  void display();                       // Display what has been rendered so far
  void close();                         // Close the window
  bool isOpen();                        // Is the window still open
  bool pollEvent(Event&);               // Pop an Event from the event queue (if there is one)
  bool waitEvent(Event&);               // Wait for an Event then return it
  sf::Vector2i getPosition();           // Get the position of the window on the screen
  sf::Vector2u getSize();               // Get the size of the window
  void setPosition(const Vector2i&);    // Set the position of the window on the screen
  void setSize(const Vector2u&);        // Set the size of the window
  void setTitle(const sf::String&);     // Set the title of the window
  void onCreate();                      // Called after the window is created
  void onResize();                      // Called after the window is resized
  
  // Some less common functions
  const ContextSettings& getSettings(); // Get the OpenGl context's settings
  void setIcon(uint width, uint height, const Uint8* pixels); // Set the icon of the window
  void setVisible(bool);                // Set the visibility of the window
  void setVerticalSyncEnabled(bool);    // Enable/Disable vertical synchronization
  void setMouseCursorVisible(bool);     // Set the visibility of the mouse cursor
  void setMouseCursorGrabbed(bool);     // Grab/Release the mouse cursor
  void setMouseCursor(const Cursor&);   // Set the displayed cursor
  void setKeyRepeatEnabled(bool);       // Enable/Disable auto key-repeat
  void setFramerateLimit(uint);         // Limit the framerate
  void setJoystickThreshold(float);     // Change the joystick threshold
  bool setActive(bool=true);            // Activate/Deactivate the window as a target for OpenGl
  void requestFocus();                  // Request to be made the active foreground window
  bool hasFocus();                      // Check whether the window has the input focus
  sf::WindowHandle getSystemHandle();   // Get the OS-specific handle of the window
}

/* sf::RenderTarget */ {
  void clear(const sf::Color& = sf::Color(0,0,0,255)); // Clear the target to a single color
  void setView(const sf::View&);        // Change the active view
  const sf::View& getView();            // Get the active view
  const sf::View& getDefaultView();     // Get the default view
  sf::IntRect getViewport(const sf::View&); // Get the viewport of a view

  // Convert a point from target coords to world coords using current view
  sf::Vector2f mapPixelToCoords(const sf::Vector2i&);

  // Convert a point from target coords to world coords
  sf::Vector2f mapPixelToCoords(const sf::Vector2i&, const sf::View&);

  // Convert a point from world coords to target coords using current view
  sf::Vector2i mapCoordsToPixel(const sf::Vector2f&);

  // Convert a point from world coords to target coords
  sf::Vector2i mapCoordsToPixel(const sf::Vector2f&, const sf::View&);

  // Draw a drawable object to the RenderTarget
  void draw(const sf::Drawable&, const sf::RenderStates&=sf::RenderStates::Default);

  // Draw primitives defined by an array of vertices
  void draw(const sf::Vertex*, std::size_t, sf::PrimitiveType,
            const sf::RenderStates&=sf::RenderStates::Default); 

  // Draw primitives defined by a vertex buffer
  void draw(const sf::VertexBuffer&, const sf::RenderStates&=sf::RenderStates::Default);

  // Draw primitives defined by a vertex buffer 
  void draw(const sf::VertexBuffer&, std::size_t firstVertex, std::size_t vertexCount,
            const sf::RenderStates&=sf::RenderStates::Default);
  
  void pushGLStates() // Save the current OpenGL render states and matrices
  void popGLStates(); // Restore the previously saved OpenGL render states and matrices
  void resetGLStates(); // Reset the internal OpenGL states so that the target is ready for drawing
  void initialize(); // Performs common initialization steps after creation
}
```
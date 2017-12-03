/**
 * https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants
 *
 */

// Standard WebGL 1 constants

// Clearing buffers

export const DEPTH_BUFFER_BIT = 0x00000100; //Passed to clear to clear the current depth buffer.
export const STENCIL_BUFFER_BIT = 0x00000400; //Passed to clear to clear the current stencil buffer.
export const COLOR_BUFFER_BIT = 0x00004000; //Passed to clear to clear the current color buffer.


// Rendering primitives

export const POINTS         = 0x0000; // Passed to drawElements or drawArrays to draw single points.
export const LINES          = 0x0001; // Passed to drawElements or drawArrays to draw lines. Each vertex connects to the one after it.
export const LINE_LOOP      = 0x0002; // Passed to drawElements or drawArrays to draw lines. Each set of two vertices is treated as a separate line segment.
export const LINE_STRIP     = 0x0003; // Passed to drawElements or drawArrays to draw a connected group of line segments from the first vertex to the last.
export const TRIANGLES      = 0x0004; // Passed to drawElements or drawArrays to draw triangles. Each set of three vertices creates a separate triangle.
export const TRIANGLE_STRIP = 0x0005; // Passed to drawElements or drawArrays to draw a connected group of triangles.
export const TRIANGLE_FAN   = 0x0006; // Passed to drawElements or drawArrays to draw a connected group of triangles. Each vertex connects to the previous and the first vertex in the fan.


// Blending modes

export const ZERO = 0; //Passed to blendFunc or blendFuncSeparate to turn off a component.
export const ONE = 1; // Passed to blendFunc or blendFuncSeparate to turn on a component.
export const SRC_COLOR = 0x0300; //Passed to blendFunc or blendFuncSeparate to multiply a component by the source elements color.
export const ONE_MINUS_SRC_COLOR = 0x0301; //Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the source elements color.
export const SRC_ALPHA = 0x0302; //Passed to blendFunc or blendFuncSeparate to multiply a component by the source's alpha.
export const ONE_MINUS_SRC_ALPHA = 0x0303; //Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the source's alpha.
export const DST_ALPHA = 0x0304; // Passed to blendFunc or blendFuncSeparate to multiply a component by the destination's alpha.
export const ONE_MINUS_DST_ALPHA = 0x0305; //Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the destination's alpha.
export const DST_COLOR = 0x0306; //Passed to blendFunc or blendFuncSeparate to multiply a component by the destination's color.
export const ONE_MINUS_DST_COLOR = 0x0307; //Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the destination's color.
export const SRC_ALPHA_SATURATE	= 0x0308; //Passed to blendFunc or blendFuncSeparate to multiply a component by the minimum of source's alpha or one minus the destination's alpha.
export const CONSTANT_COLOR	= 0x8001; //Passed to blendFunc or blendFuncSeparate to specify a constant color blend function.
export const ONE_MINUS_CONSTANT_COLOR = 0x8002; //Passed to blendFunc or blendFuncSeparate to specify one minus a constant color blend function.
export const CONSTANT_ALPHA	= 0x8003; //Passed to blendFunc or blendFuncSeparate to specify a constant alpha blend function.
export const ONE_MINUS_CONSTANT_ALPHA = 0x8004; //Passed to blendFunc or blendFuncSeparate to specify one minus a constant alpha blend function.


// Blending equations

export const FUNC_ADD = 0x8006; //Passed to blendEquation or blendEquationSeparate to set an addition blend function.
export const FUNC_SUBSTRACT	= 0x800A; //Passed to blendEquation or blendEquationSeparate to specify a subtraction blend function (source - destination).
export const FUNC_REVERSE_SUBTRACT = 0x800B; //Passed to blendEquation or blendEquationSeparate to specify a reverse subtraction blend function (destination - source).


// Getting GL parameter information

export const BLEND_EQUATION	= 0x8009; //Passed to getParameter to get the current RGB blend function.
export const BLEND_EQUATION_RGB	= 0x8009; //Passed to getParameter to get the current RGB blend function. Same as BLEND_EQUATION
export const BLEND_EQUATION_ALPHA = 0x883D; //Passed to getParameter to get the current alpha blend function. Same as BLEND_EQUATION
export const BLEND_DST_RGB = 0x80C8; //Passed to getParameter to get the current destination RGB blend function.
export const BLEND_SRC_RGB = 0x80C9; //Passed to getParameter to get the current destination RGB blend function.
export const BLEND_DST_ALPHA = 0x80CA; //Passed to getParameter to get the current destination alpha blend function.
export const BLEND_SRC_ALPHA = 0x80CB; //Passed to getParameter to get the current source alpha blend function.
export const BLEND_COLOR = 0x8005; //Passed to getParameter to return a the current blend color.
export const ARRAY_BUFFER_BINDING = 0x8894; //Passed to getParameter to get the array buffer binding.
export const ELEMENT_ARRAY_BUFFER_BINDING = 0x8895; //Passed to getParameter to get the current element array buffer.
export const LINE_WIDTH	= 0x0B21; //Passed to getParameter to get the current lineWidth (set by the lineWidth method).
export const ALIASED_POINT_SIZE_RANGE = 0x846D; //Passed to getParameter to get the current size of a point drawn with gl.POINTS
export const ALIASED_LINE_WIDTH_RANGE = 0x846E; //Passed to getParameter to get the range of available widths for a line. Returns a length-2 array with the lo value at 0, and hight at 1.
export const CULL_FACE_MODE	= 0x0B45; //Passed to getParameter to get the current value of cullFace. Should return FRONT, BACK, or FRONT_AND_BACK
export const FRONT_FACE	= 0x0B46; //Passed to getParameter to determine the current value of frontFace. Should return CW or CCW.
export const DEPTH_RANGE = 0x0B70; //Passed to getParameter to return a length-2 array of floats giving the current depth range.
export const DEPTH_WRITEMASK = 0x0B72; //Passed to getParameter to determine if the depth write mask is enabled.
export const DEPTH_CLEAR_VALUE = 0x0B73; //Passed to getParameter to determine the current depth clear value.
export const DEPTH_FUNC	= 0x0B74; //Passed to getParameter to get the current depth function. Returns NEVER, ALWAYS, LESS, EQUAL, LEQUAL, GREATER, GEQUAL, or NOTEQUAL.
export const STENCIL_CLEAR_VALUE = 0x0B91; //Passed to getParameter to get the value the stencil will be cleared to.
export const STENCIL_FUNC = 0x0B92; //Passed to getParameter to get the current stencil function. Returns NEVER, ALWAYS, LESS, EQUAL, LEQUAL, GREATER, GEQUAL, or NOTEQUAL.
export const STENCIL_FAIL = 0x0B94; //Passed to getParameter to get the current stencil fail function. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP.
export const STENCIL_PASS_DEPTH_FAIL = 0x0B95; //Passed to getParameter to get the current stencil fail function should the depth buffer test fail. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP.
export const STENCIL_PASS_DEPTH_PASS = 0x0B96; //Passed to getParameter to get the current stencil fail function should the depth buffer test pass. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP.
export const STENCIL_REF = 0x0B97; //Passed to getParameter to get the reference value used for stencil tests.
export const STENCIL_VALUE_MASK = 0x0B93;
export const STENCIL_WRITEMASK = 0x0B98;
export const STENCIL_BACK_FUNC = 0x8800;
export const STENCIL_BACK_FAIL = 0x8801;
export const STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802;
export const STENCIL_BACK_PASS_DEPTH_PASS = 0x8803;
export const STENCIL_BACK_REF = 0x8CA3;
export const STENCIL_BACK_VALUE_MASK = 0x8CA4;
export const STENCIL_BACK_WRITEMASK = 0x8CA5;
export const VIEWPORT	= 0x0BA2; //Returns an Int32Array with four elements for the current viewport dimensions.
export const SCISSOR_BOX = 0x0C10; //Returns an Int32Array with four elements for the current scissor box dimensions.
export const COLOR_CLEAR_VALUE = 0x0C22; //
export const COLOR_WRITEMASK = 0x0C23;
export const UNPACK_ALIGNMENT = 0x0CF5;
export const PACK_ALIGNMENT = 0x0D05;
export const MAX_TEXTURE_SIZE = 0x0D33;
export const MAX_VIEWPORT_DIMS = 0x0D3A;
export const SUBPIXEL_BITS = 0x0D50;
export const RED_BITS = 0x0D52;
export const GREEN_BITS = 0x0D53;
export const BLUE_BITS = 0x0D54;
export const ALPHA_BITS = 0x0D55;
export const DEPTH_BITS = 0x0D56;
export const STENCIL_BITS = 0x0D57;
export const POLYGON_OFFSET_UNITS = 0x2A00;
export const POLYGON_OFFSET_FACTOR = 0x8038;
export const TEXTURE_BINDING_2D = 0x8069;
export const SAMPLE_BUFFERS = 0x80A8;
export const SAMPLES = 0x80A9;
export const SAMPLE_COVERAGE_VALUE = 0x80AA;
export const SAMPLE_COVERAGE_INVERT = 0x80AB;
export const COMPRESSED_TEXTURE_FORMATS = 0x86A3;
export const VENDOR = 0x1F00;
export const RENDERER = 0x1F01;
export const VERSION = 0x1F02;
export const IMPLEMENTATION_COLOR_READ_TYPE = 0x8B9A;
export const IMPLEMENTATION_COLOR_READ_FORMAT = 0x8B9B;
export const BROWSER_DEFAULT_WEBGL = 0x9244;


// Buffers

export const STATIC_DRAW = 0x88E4; //Passed to bufferData as a hint about whether the contents of the buffer are likely to be used often and not change often.
export const STREAM_DRAW = 0x88E0; //Passed to bufferData as a hint about whether the contents of the buffer are likely to not be used often.
export const DYNAMIC_DRAW = 0x88E8; //Passed to bufferData as a hint about whether the contents of the buffer are likely to be used often and change often.
export const ARRAY_BUFFER = 0x8892; //Passed to bindBuffer or bufferData to specify the type of buffer being used.
export const ELEMENT_ARRAY_BUFFER = 0x8893; //Passed to bindBuffer or bufferData to specify the type of buffer being used.
export const BUFFER_SIZE = 0x8764; //Passed to getBufferParameter to get a buffer's size.
export const BUFFER_USAGE = 0x8765; //Passed to getBufferParameter to get the hint for the buffer passed in when it was created.


// Vertex attributes

export const CURRENT_VERTEX_ATTRIB = 0x8626; //Passed to getVertexAttrib to read back the current vertex attribute.
export const VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622;
export const VERTEX_ATTRIB_ARRAY_SIZE = 0x8623;
export const VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624;
export const VERTEX_ATTRIB_ARRAY_TYPE = 0x8625;
export const VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886A;
export const VERTEX_ATTRIB_ARRAY_POINTER = 0x8645;
export const VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889F;


// Culling

export const CULL_FACE = 0x0B44;//Passed to enable/disable to turn on/off culling. Can also be used with getParameter to find the current culling method.
export const FRONT = 0x0404;//Passed to cullFace to specify that only front faces should be drawn.
export const BACK = 0x0405;//Passed to cullFace to specify that only back faces should be drawn.
export const FRONT_AND_BACK = 0x0408;//Passed to cullFace to specify that front and back faces should be drawn.


// Enabling and disabling

export const BLEND = 0x0BE2; //	Passed to enable/disable to turn on/off blending. Can also be used with getParameter to find the current blending method.
export const DEPTH_TEST = 0x0B71; //Passed to enable/disable to turn on/off the depth test. Can also be used with getParameter to query the depth test.
export const DITHER = 0x0BD0; //Passed to enable/disable to turn on/off dithering. Can also be used with getParameter to find the current dithering method.
export const POLYGON_OFFSET_FILL = 0x8037; //Passed to enable/disable to turn on/off the polygon offset. Useful for rendering hidden-line images, decals, and or solids with highlighted edges. Can also be used with getParameter to query the scissor test.
export const SAMPLE_ALPHA_TO_COVERAGE = 0x809E; //Passed to enable/disable to turn on/off the alpha to coverage. Used in multi-sampling alpha channels.
export const SAMPLE_COVERAGE = 0x80A0; //Passed to enable/disable to turn on/off the sample coverage. Used in multi-sampling.
export const SCISSOR_TEST = 0x0C11; //Passed to enable/disable to turn on/off the scissor test. Can also be used with getParameter to query the scissor test.
export const STENCIL_TEST = 0x0B90; //Passed to enable/disable to turn on/off the stencil test. Can also be used with getParameter to query the stencil test.


// Errors

export const NO_ERROR = 0; //Returned from getError.
export const INVALID_ENUM = 0x0500; //Returned from getError.
export const INVALID_VALUE = 0x0501; //Returned from getError.
export const INVALID_OPERATION = 0x0502; //Returned from getError.
export const OUT_OF_MEMORY = 0x0505; //Returned from getError.
export const CONTEXT_LOST_WEBGL = 0x9242; //Returned from getError.


// Front face directions

export const CW = 0x0900; //Passed to frontFace to specify the front face of a polygon is drawn in the clockwise direction
export const CCW = 0x0901; //Passed to frontFace to specify the front face of a polygon is drawn in the counter clockwise direction


// Hints

export const DONT_CARE = 0x1100; //There is no preference for this behavior.
export const FASTEST = 0x1101; //The most efficient behavior should be used.
export const NICEST = 0x1102; //The most correct or the highest quality option should be used.
export const GENERATE_MIPMAP_HINT = 0x8192; //Hint for the quality of filtering when generating mipmap images with WebGLRenderingContext.generateMipmap().


// Data types

export const BYTE = 0x1400;
export const UNSIGNED_BYTE = 0x1401;
export const SHORT = 0x1402;
export const UNSIGNED_SHORT = 0x1403;
export const INT = 0x1404;
export const UNSIGNED_INT = 0x1405;
export const FLOAT = 0x1406;


// Pixel formats

export const DEPTH_COMPONENT = 0x1902;
export const ALPHA = 0x1906;
export const RGB = 0x1907;
export const RGBA = 0x1908;
export const LUMINANCE = 0x1909;
export const LUMINANCE_ALPHA = 0x190A;


// Pixel types

// export const UNSIGNED_BYTE = 0x1401;
export const UNSIGNED_SHORT_4_4_4_4 = 0x8033;
export const UNSIGNED_SHORT_5_5_5_1 = 0x8034;
export const UNSIGNED_SHORT_5_6_5 = 0x8363;

// Shaders

export const FRAGMENT_SHADER = 0x8B30; //Passed to createShader to define a fragment shader.
export const VERTEX_SHADER = 0x8B31; //Passed to createShader to define a vertex shader
export const COMPILE_STATUS = 0x8B81; //Passed to getShaderParamter to get the status of the compilation. Returns false if the shader was not compiled. You can then query getShaderInfoLog to find the exact error
export const DELETE_STATUS = 0x8B80; //Passed to getShaderParamter to determine if a shader was deleted via deleteShader. Returns true if it was, false otherwise.
export const LINK_STATUS = 0x8B82; //Passed to getProgramParameter after calling linkProgram to determine if a program was linked correctly. Returns false if there were errors. Use getProgramInfoLog to find the exact error.
export const VALIDATE_STATUS = 0x8B83; //Passed to getProgramParameter after calling validateProgram to determine if it is valid. Returns false if errors were found.
export const ATTACHED_SHADERS = 0x8B85; //Passed to getProgramParameter after calling attachShader to determine if the shader was attached correctly. Returns false if errors occurred.
export const ACTIVE_ATTRIBUTES = 0x8B89; //Passed to getProgramParameter to get the number of attributes active in a program.
export const ACTIVE_UNIFORMS = 0x8B86; //Passed to getProgramParamter to get the number of uniforms active in a program.
export const MAX_VERTEX_ATTRIBS = 0x8869; //The maximum number of entries possible in the vertex attribute list.
export const MAX_VERTEX_UNIFORM_VECTORS = 0x8DF; //
export const MAX_VARYING_VECTORS = 0x8DF; //
export const MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8B4; //
export const MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8B4; //
export const MAX_TEXTURE_IMAGE_UNITS = 0x8872; //Implementation dependent number of maximum texture units. At least 8.
export const MAX_FRAGMENT_UNIFORM_VECTORS = 0x8DF; //
export const SHADER_TYPE = 0x8B4; //
export const SHADING_LANGUAGE_VERSION = 0x8B8; //
export const CURRENT_PROGRAM = 0x8B8D	; //


// Depth or stencil tests

export const NEVER = 0x0200; //Passed to depthFunction or stencilFunction to specify depth or stencil tests will never pass. i.e. Nothing will be drawn.
export const ALWAYS = 0x0207; //Passed to depthFunction or stencilFunction to specify depth or stencil tests will always pass. i.e. Pixels will be drawn in the order they are drawn.
export const LESS = 0x0201; //Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than the stored value.
export const EQUAL = 0x0202; //Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is equals to the stored value.
export const LEQUAL = 0x0203; //Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than or equal to the stored value.
export const GREATER = 0x0204; //Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than the stored value.
export const GEQUAL = 0x0206; //Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than or equal to the stored value.
export const NOTEQUAL = 0x0205; //Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is not equal to the stored value.


// Stencil actions

export const KEEP = 0x1E00;
export const REPLACE = 0x1E01;
export const INCR = 0x1E02;
export const DECR = 0x1E03;
export const INVERT = 0x150A;
export const INCR_WRAP = 0x8507;
export const DECR_WRAP = 0x8508;

// Textures

export const NEAREST = 0x2600;
export const LINEAR = 0x2601;
export const NEAREST_MIPMAP_NEAREST = 0x2700;
export const LINEAR_MIPMAP_NEAREST = 0x2701;
export const NEAREST_MIPMAP_LINEAR = 0x2702;
export const LINEAR_MIPMAP_LINEAR = 0x2703;
export const TEXTURE_MAG_FILTER = 0x2800;
export const TEXTURE_MIN_FILTER = 0x2801;
export const TEXTURE_WRAP_S = 0x2802;
export const TEXTURE_WRAP_T = 0x2803;
export const TEXTURE_2D = 0x0DE1;
export const TEXTURE = 0x1702;
export const TEXTURE_CUBE_MAP = 0x8513;
export const TEXTURE_BINDING_CUBE_MAP = 0x8514;
export const TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515;
export const TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516;
export const TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517;
export const TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518;
export const TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519;
export const TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851A;
export const MAX_CUBE_MAP_TEXTURE_SIZE = 0x851C;
export const TEXTURE0 = 0x84C0;
// TEXTURE0 - 31	0x84C0 - 0x84DF	A texture unit.
export const ACTIVE_TEXTURE = 0x84E0; //The current active texture unit.
export const REPEAT = 0x2901;
export const CLAMP_TO_EDGE = 0x812F;
export const MIRRORED_REPEAT = 0x8370;

// Uniform types

export const FLOAT_VEC2 = 0x8B50;
export const FLOAT_VEC3 = 0x8B51;
export const FLOAT_VEC4 = 0x8B52;
export const INT_VEC2 = 0x8B53;
export const INT_VEC3 = 0x8B54;
export const INT_VEC4 = 0x8B55;
export const BOOL = 0x8B56;
export const BOOL_VEC2 = 0x8B57;
export const BOOL_VEC3 = 0x8B58;
export const BOOL_VEC4 = 0x8B59;
export const FLOAT_MAT2 = 0x8B5A;
export const FLOAT_MAT3 = 0x8B5B;
export const FLOAT_MAT4 = 0x8B5C;
export const SAMPLER_2D = 0x8B5E;
export const SAMPLER_CUBE = 0x8B60;

// Shader precision-specified types

export const LOW_FLOAT = 0x8DF0;
export const MEDIUM_FLOAT = 0x8DF1;
export const HIGH_FLOAT = 0x8DF2;
export const LOW_INT = 0x8DF3;
export const MEDIUM_INT = 0x8DF4;
export const HIGH_INT = 0x8DF5;

// Framebuffers and renderbuffers

export const FRAMEBUFFER = 0x8D40;
export const RENDERBUFFER = 0x8D41;
export const RGBA4 = 0x8056;
export const RGB5_A1 = 0x8057;
export const RGB565 = 0x8D62;
export const DEPTH_COMPONENT16 = 0x81A5;
export const STENCIL_INDEX = 0x1901;
export const STENCIL_INDEX8 = 0x8D48;
export const DEPTH_STENCIL = 0x84F9;
export const RENDERBUFFER_WIDTH = 0x8D42;
export const RENDERBUFFER_HEIGHT = 0x8D43;
export const RENDERBUFFER_INTERNAL_FORMAT = 0x8D44;
export const RENDERBUFFER_RED_SIZE = 0x8D50;
export const RENDERBUFFER_GREEN_SIZE = 0x8D51;
export const RENDERBUFFER_BLUE_SIZE = 0x8D52;
export const RENDERBUFFER_ALPHA_SIZE = 0x8D53;
export const RENDERBUFFER_DEPTH_SIZE = 0x8D54;
export const RENDERBUFFER_STENCIL_SIZE = 0x8D55;
export const FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8CD0;
export const FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8CD1;
export const FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8CD2;
export const FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8CD3;
export const COLOR_ATTACHMENT0 = 0x8CE0;
export const DEPTH_ATTACHMENT = 0x8D00;
export const STENCIL_ATTACHMENT = 0x8D20;
export const DEPTH_STENCIL_ATTACHMENT = 0x821A;
export const NONE = 0;
export const FRAMEBUFFER_COMPLETE = 0x8CD5;
export const FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8CD6;
export const FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8CD7;
export const FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8CD9;
export const FRAMEBUFFER_UNSUPPORTED = 0x8CDD;
export const FRAMEBUFFER_BINDING = 0x8CA6;
export const RENDERBUFFER_BINDING = 0x8CA7;
export const MAX_RENDERBUFFER_SIZE = 0x84E8;
export const INVALID_FRAMEBUFFER_OPERATION = 0x0506;


// Pixel storage modes

export const UNPACK_FLIP_Y_WEBGL = 0x9240;
export const UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241;
export const UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243;


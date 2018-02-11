/**
 * https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants
 *
 */

// Standard WebGL 1 constants

// Clearing buffers

const DEPTH_BUFFER_BIT = 0x00000100; //Passed to clear to clear the current depth buffer.
const STENCIL_BUFFER_BIT = 0x00000400; //Passed to clear to clear the current stencil buffer.
const COLOR_BUFFER_BIT = 0x00004000; //Passed to clear to clear the current color buffer.


// Rendering primitives

const POINTS         = 0x0000; // Passed to drawElements or drawArrays to draw single points.
const LINES          = 0x0001; // Passed to drawElements or drawArrays to draw lines. Each vertex connects to the one after it.
const LINE_LOOP      = 0x0002; // Passed to drawElements or drawArrays to draw lines. Each set of two vertices is treated as a separate line segment.
const LINE_STRIP     = 0x0003; // Passed to drawElements or drawArrays to draw a connected group of line segments from the first vertex to the last.
const TRIANGLES      = 0x0004; // Passed to drawElements or drawArrays to draw triangles. Each set of three vertices creates a separate triangle.
const TRIANGLE_STRIP = 0x0005; // Passed to drawElements or drawArrays to draw a connected group of triangles.
const TRIANGLE_FAN   = 0x0006; // Passed to drawElements or drawArrays to draw a connected group of triangles. Each vertex connects to the previous and the first vertex in the fan.


// Blending modes

const ZERO = 0; //Passed to blendFunc or blendFuncSeparate to turn off a component.
const ONE = 1; // Passed to blendFunc or blendFuncSeparate to turn on a component.
const SRC_COLOR = 0x0300; //Passed to blendFunc or blendFuncSeparate to multiply a component by the source elements color.
const ONE_MINUS_SRC_COLOR = 0x0301; //Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the source elements color.
const SRC_ALPHA = 0x0302; //Passed to blendFunc or blendFuncSeparate to multiply a component by the source's alpha.
const ONE_MINUS_SRC_ALPHA = 0x0303; //Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the source's alpha.
const DST_ALPHA = 0x0304; // Passed to blendFunc or blendFuncSeparate to multiply a component by the destination's alpha.
const ONE_MINUS_DST_ALPHA = 0x0305; //Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the destination's alpha.
const DST_COLOR = 0x0306; //Passed to blendFunc or blendFuncSeparate to multiply a component by the destination's color.
const ONE_MINUS_DST_COLOR = 0x0307; //Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the destination's color.
const SRC_ALPHA_SATURATE	= 0x0308; //Passed to blendFunc or blendFuncSeparate to multiply a component by the minimum of source's alpha or one minus the destination's alpha.
const CONSTANT_COLOR	= 0x8001; //Passed to blendFunc or blendFuncSeparate to specify a constant color blend function.
const ONE_MINUS_CONSTANT_COLOR = 0x8002; //Passed to blendFunc or blendFuncSeparate to specify one minus a constant color blend function.
const CONSTANT_ALPHA	= 0x8003; //Passed to blendFunc or blendFuncSeparate to specify a constant alpha blend function.
const ONE_MINUS_CONSTANT_ALPHA = 0x8004; //Passed to blendFunc or blendFuncSeparate to specify one minus a constant alpha blend function.


// Blending equations

const FUNC_ADD = 0x8006; //Passed to blendEquation or blendEquationSeparate to set an addition blend function.
const FUNC_SUBSTRACT	= 0x800A; //Passed to blendEquation or blendEquationSeparate to specify a subtraction blend function (source - destination).
const FUNC_REVERSE_SUBTRACT = 0x800B; //Passed to blendEquation or blendEquationSeparate to specify a reverse subtraction blend function (destination - source).


// Getting GL parameter information

const BLEND_EQUATION	= 0x8009; //Passed to getParameter to get the current RGB blend function.
const BLEND_EQUATION_RGB	= 0x8009; //Passed to getParameter to get the current RGB blend function. Same as BLEND_EQUATION
const BLEND_EQUATION_ALPHA = 0x883D; //Passed to getParameter to get the current alpha blend function. Same as BLEND_EQUATION
const BLEND_DST_RGB = 0x80C8; //Passed to getParameter to get the current destination RGB blend function.
const BLEND_SRC_RGB = 0x80C9; //Passed to getParameter to get the current destination RGB blend function.
const BLEND_DST_ALPHA = 0x80CA; //Passed to getParameter to get the current destination alpha blend function.
const BLEND_SRC_ALPHA = 0x80CB; //Passed to getParameter to get the current source alpha blend function.
const BLEND_COLOR = 0x8005; //Passed to getParameter to return a the current blend color.
const ARRAY_BUFFER_BINDING = 0x8894; //Passed to getParameter to get the array buffer binding.
const ELEMENT_ARRAY_BUFFER_BINDING = 0x8895; //Passed to getParameter to get the current element array buffer.
const LINE_WIDTH	= 0x0B21; //Passed to getParameter to get the current lineWidth (set by the lineWidth method).
const ALIASED_POINT_SIZE_RANGE = 0x846D; //Passed to getParameter to get the current size of a point drawn with gl.POINTS
const ALIASED_LINE_WIDTH_RANGE = 0x846E; //Passed to getParameter to get the range of available widths for a line. Returns a length-2 array with the lo value at 0, and hight at 1.
const CULL_FACE_MODE	= 0x0B45; //Passed to getParameter to get the current value of cullFace. Should return FRONT, BACK, or FRONT_AND_BACK
const FRONT_FACE	= 0x0B46; //Passed to getParameter to determine the current value of frontFace. Should return CW or CCW.
const DEPTH_RANGE = 0x0B70; //Passed to getParameter to return a length-2 array of floats giving the current depth range.
const DEPTH_WRITEMASK = 0x0B72; //Passed to getParameter to determine if the depth write mask is enabled.
const DEPTH_CLEAR_VALUE = 0x0B73; //Passed to getParameter to determine the current depth clear value.
const DEPTH_FUNC	= 0x0B74; //Passed to getParameter to get the current depth function. Returns NEVER, ALWAYS, LESS, EQUAL, LEQUAL, GREATER, GEQUAL, or NOTEQUAL.
const STENCIL_CLEAR_VALUE = 0x0B91; //Passed to getParameter to get the value the stencil will be cleared to.
const STENCIL_FUNC = 0x0B92; //Passed to getParameter to get the current stencil function. Returns NEVER, ALWAYS, LESS, EQUAL, LEQUAL, GREATER, GEQUAL, or NOTEQUAL.
const STENCIL_FAIL = 0x0B94; //Passed to getParameter to get the current stencil fail function. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP.
const STENCIL_PASS_DEPTH_FAIL = 0x0B95; //Passed to getParameter to get the current stencil fail function should the depth buffer test fail. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP.
const STENCIL_PASS_DEPTH_PASS = 0x0B96; //Passed to getParameter to get the current stencil fail function should the depth buffer test pass. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP.
const STENCIL_REF = 0x0B97; //Passed to getParameter to get the reference value used for stencil tests.
const STENCIL_VALUE_MASK = 0x0B93;
const STENCIL_WRITEMASK = 0x0B98;
const STENCIL_BACK_FUNC = 0x8800;
const STENCIL_BACK_FAIL = 0x8801;
const STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802;
const STENCIL_BACK_PASS_DEPTH_PASS = 0x8803;
const STENCIL_BACK_REF = 0x8CA3;
const STENCIL_BACK_VALUE_MASK = 0x8CA4;
const STENCIL_BACK_WRITEMASK = 0x8CA5;
const VIEWPORT	= 0x0BA2; //Returns an Int32Array with four elements for the current viewport dimensions.
const SCISSOR_BOX = 0x0C10; //Returns an Int32Array with four elements for the current scissor box dimensions.
const COLOR_CLEAR_VALUE = 0x0C22; //
const COLOR_WRITEMASK = 0x0C23;
const UNPACK_ALIGNMENT = 0x0CF5;
const PACK_ALIGNMENT = 0x0D05;
const MAX_TEXTURE_SIZE = 0x0D33;
const MAX_VIEWPORT_DIMS = 0x0D3A;
const SUBPIXEL_BITS = 0x0D50;
const RED_BITS = 0x0D52;
const GREEN_BITS = 0x0D53;
const BLUE_BITS = 0x0D54;
const ALPHA_BITS = 0x0D55;
const DEPTH_BITS = 0x0D56;
const STENCIL_BITS = 0x0D57;
const POLYGON_OFFSET_UNITS = 0x2A00;
const POLYGON_OFFSET_FACTOR = 0x8038;
const TEXTURE_BINDING_2D = 0x8069;
const SAMPLE_BUFFERS = 0x80A8;
const SAMPLES = 0x80A9;
const SAMPLE_COVERAGE_VALUE = 0x80AA;
const SAMPLE_COVERAGE_INVERT = 0x80AB;
const COMPRESSED_TEXTURE_FORMATS = 0x86A3;
const VENDOR = 0x1F00;
const RENDERER = 0x1F01;
const VERSION = 0x1F02;
const IMPLEMENTATION_COLOR_READ_TYPE = 0x8B9A;
const IMPLEMENTATION_COLOR_READ_FORMAT = 0x8B9B;
const BROWSER_DEFAULT_WEBGL = 0x9244;


// Buffers

const STATIC_DRAW = 0x88E4; //Passed to bufferData as a hint about whether the contents of the buffer are likely to be used often and not change often.
const STREAM_DRAW = 0x88E0; //Passed to bufferData as a hint about whether the contents of the buffer are likely to not be used often.
const DYNAMIC_DRAW = 0x88E8; //Passed to bufferData as a hint about whether the contents of the buffer are likely to be used often and change often.
const ARRAY_BUFFER = 0x8892; //Passed to bindBuffer or bufferData to specify the type of buffer being used.
const ELEMENT_ARRAY_BUFFER = 0x8893; //Passed to bindBuffer or bufferData to specify the type of buffer being used.
const BUFFER_SIZE = 0x8764; //Passed to getBufferParameter to get a buffer's size.
const BUFFER_USAGE = 0x8765; //Passed to getBufferParameter to get the hint for the buffer passed in when it was created.


// Vertex attributes

const CURRENT_VERTEX_ATTRIB = 0x8626; //Passed to getVertexAttrib to read back the current vertex attribute.
const VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622;
const VERTEX_ATTRIB_ARRAY_SIZE = 0x8623;
const VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624;
const VERTEX_ATTRIB_ARRAY_TYPE = 0x8625;
const VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886A;
const VERTEX_ATTRIB_ARRAY_POINTER = 0x8645;
const VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889F;


// Culling

const CULL_FACE = 0x0B44;//Passed to enable/disable to turn on/off culling. Can also be used with getParameter to find the current culling method.
const FRONT = 0x0404;//Passed to cullFace to specify that only front faces should be drawn.
const BACK = 0x0405;//Passed to cullFace to specify that only back faces should be drawn.
const FRONT_AND_BACK = 0x0408;//Passed to cullFace to specify that front and back faces should be drawn.


// Enabling and disabling

const BLEND = 0x0BE2; //	Passed to enable/disable to turn on/off blending. Can also be used with getParameter to find the current blending method.
const DEPTH_TEST = 0x0B71; //Passed to enable/disable to turn on/off the depth test. Can also be used with getParameter to query the depth test.
const DITHER = 0x0BD0; //Passed to enable/disable to turn on/off dithering. Can also be used with getParameter to find the current dithering method.
const POLYGON_OFFSET_FILL = 0x8037; //Passed to enable/disable to turn on/off the polygon offset. Useful for rendering hidden-line images, decals, and or solids with highlighted edges. Can also be used with getParameter to query the scissor test.
const SAMPLE_ALPHA_TO_COVERAGE = 0x809E; //Passed to enable/disable to turn on/off the alpha to coverage. Used in multi-sampling alpha channels.
const SAMPLE_COVERAGE = 0x80A0; //Passed to enable/disable to turn on/off the sample coverage. Used in multi-sampling.
const SCISSOR_TEST = 0x0C11; //Passed to enable/disable to turn on/off the scissor test. Can also be used with getParameter to query the scissor test.
const STENCIL_TEST = 0x0B90; //Passed to enable/disable to turn on/off the stencil test. Can also be used with getParameter to query the stencil test.


// Errors

const NO_ERROR = 0; //Returned from getError.
const INVALID_ENUM = 0x0500; //Returned from getError.
const INVALID_VALUE = 0x0501; //Returned from getError.
const INVALID_OPERATION = 0x0502; //Returned from getError.
const OUT_OF_MEMORY = 0x0505; //Returned from getError.
const CONTEXT_LOST_WEBGL = 0x9242; //Returned from getError.


// Front face directions

const CW = 0x0900; //Passed to frontFace to specify the front face of a polygon is drawn in the clockwise direction
const CCW = 0x0901; //Passed to frontFace to specify the front face of a polygon is drawn in the counter clockwise direction


// Hints

const DONT_CARE = 0x1100; //There is no preference for this behavior.
const FASTEST = 0x1101; //The most efficient behavior should be used.
const NICEST = 0x1102; //The most correct or the highest quality option should be used.
const GENERATE_MIPMAP_HINT = 0x8192; //Hint for the quality of filtering when generating mipmap images with WebGLRenderingContext.generateMipmap().


// Data types

const BYTE = 0x1400;
const UNSIGNED_BYTE = 0x1401;
const SHORT = 0x1402;
const UNSIGNED_SHORT = 0x1403;
const INT = 0x1404;
const UNSIGNED_INT = 0x1405;
const FLOAT = 0x1406;


// Pixel formats

const DEPTH_COMPONENT = 0x1902;
const ALPHA = 0x1906;
const RGB = 0x1907;
const RGBA = 0x1908;
const LUMINANCE = 0x1909;
const LUMINANCE_ALPHA = 0x190A;


// Pixel types

// export const UNSIGNED_BYTE = 0x1401;
const UNSIGNED_SHORT_4_4_4_4 = 0x8033;
const UNSIGNED_SHORT_5_5_5_1 = 0x8034;
const UNSIGNED_SHORT_5_6_5 = 0x8363;

// Shaders

const FRAGMENT_SHADER = 0x8B30; //Passed to createShader to define a fragment shader.
const VERTEX_SHADER = 0x8B31; //Passed to createShader to define a vertex shader
const COMPILE_STATUS = 0x8B81; //Passed to getShaderParamter to get the status of the compilation. Returns false if the shader was not compiled. You can then query getShaderInfoLog to find the exact error
const DELETE_STATUS = 0x8B80; //Passed to getShaderParamter to determine if a shader was deleted via deleteShader. Returns true if it was, false otherwise.
const LINK_STATUS = 0x8B82; //Passed to getProgramParameter after calling linkProgram to determine if a program was linked correctly. Returns false if there were errors. Use getProgramInfoLog to find the exact error.
const VALIDATE_STATUS = 0x8B83; //Passed to getProgramParameter after calling validateProgram to determine if it is valid. Returns false if errors were found.
const ATTACHED_SHADERS = 0x8B85; //Passed to getProgramParameter after calling attachShader to determine if the shader was attached correctly. Returns false if errors occurred.
const ACTIVE_ATTRIBUTES = 0x8B89; //Passed to getProgramParameter to get the number of attributes active in a program.
const ACTIVE_UNIFORMS = 0x8B86; //Passed to getProgramParamter to get the number of uniforms active in a program.
const MAX_VERTEX_ATTRIBS = 0x8869; //The maximum number of entries possible in the vertex attribute list.
const MAX_VERTEX_UNIFORM_VECTORS = 0x8DF; //
const MAX_VARYING_VECTORS = 0x8DF; //
const MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8B4; //
const MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8B4; //
const MAX_TEXTURE_IMAGE_UNITS = 0x8872; //Implementation dependent number of maximum texture units. At least 8.
const MAX_FRAGMENT_UNIFORM_VECTORS = 0x8DF; //
const SHADER_TYPE = 0x8B4; //
const SHADING_LANGUAGE_VERSION = 0x8B8; //
const CURRENT_PROGRAM = 0x8B8D; //


// Depth or stencil tests

const NEVER = 0x0200; //Passed to depthFunction or stencilFunction to specify depth or stencil tests will never pass. i.e. Nothing will be drawn.
const ALWAYS = 0x0207; //Passed to depthFunction or stencilFunction to specify depth or stencil tests will always pass. i.e. Pixels will be drawn in the order they are drawn.
const LESS = 0x0201; //Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than the stored value.
const EQUAL = 0x0202; //Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is equals to the stored value.
const LEQUAL = 0x0203; //Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than or equal to the stored value.
const GREATER = 0x0204; //Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than the stored value.
const GEQUAL = 0x0206; //Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than or equal to the stored value.
const NOTEQUAL = 0x0205; //Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is not equal to the stored value.


// Stencil actions

const KEEP = 0x1E00;
const REPLACE = 0x1E01;
const INCR = 0x1E02;
const DECR = 0x1E03;
const INVERT = 0x150A;
const INCR_WRAP = 0x8507;
const DECR_WRAP = 0x8508;

// Textures

const NEAREST = 0x2600;
const LINEAR = 0x2601;
const NEAREST_MIPMAP_NEAREST = 0x2700;
const LINEAR_MIPMAP_NEAREST = 0x2701;
const NEAREST_MIPMAP_LINEAR = 0x2702;
const LINEAR_MIPMAP_LINEAR = 0x2703;
const TEXTURE_MAG_FILTER = 0x2800;
const TEXTURE_MIN_FILTER = 0x2801;
const TEXTURE_WRAP_S = 0x2802;
const TEXTURE_WRAP_T = 0x2803;
const TEXTURE_2D = 0x0DE1;
const TEXTURE = 0x1702;
const TEXTURE_CUBE_MAP = 0x8513;
const TEXTURE_BINDING_CUBE_MAP = 0x8514;
const TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515;
const TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516;
const TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517;
const TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518;
const TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519;
const TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851A;
const MAX_CUBE_MAP_TEXTURE_SIZE = 0x851C;
const TEXTURE0 = 0x84C0;
// TEXTURE0 - 31	0x84C0 - 0x84DF	A texture unit.
const ACTIVE_TEXTURE = 0x84E0; //The current active texture unit.
const REPEAT = 0x2901;
const CLAMP_TO_EDGE = 0x812F;
const MIRRORED_REPEAT = 0x8370;

// Uniform types

const FLOAT_VEC2 = 0x8B50;
const FLOAT_VEC3 = 0x8B51;
const FLOAT_VEC4 = 0x8B52;
const INT_VEC2 = 0x8B53;
const INT_VEC3 = 0x8B54;
const INT_VEC4 = 0x8B55;
const BOOL = 0x8B56;
const BOOL_VEC2 = 0x8B57;
const BOOL_VEC3 = 0x8B58;
const BOOL_VEC4 = 0x8B59;
const FLOAT_MAT2 = 0x8B5A;
const FLOAT_MAT3 = 0x8B5B;
const FLOAT_MAT4 = 0x8B5C;
const SAMPLER_2D = 0x8B5E;
const SAMPLER_CUBE = 0x8B60;

// Shader precision-specified types

const LOW_FLOAT = 0x8DF0;
const MEDIUM_FLOAT = 0x8DF1;
const HIGH_FLOAT = 0x8DF2;
const LOW_INT = 0x8DF3;
const MEDIUM_INT = 0x8DF4;
const HIGH_INT = 0x8DF5;

// Framebuffers and renderbuffers

const FRAMEBUFFER = 0x8D40;
const RENDERBUFFER = 0x8D41;
const RGBA4 = 0x8056;
const RGB5_A1 = 0x8057;
const RGB565 = 0x8D62;
const DEPTH_COMPONENT16 = 0x81A5;
const STENCIL_INDEX = 0x1901;
const STENCIL_INDEX8 = 0x8D48;
// export const DEPTH_STENCIL = 0x84F9;
const RENDERBUFFER_WIDTH = 0x8D42;
const RENDERBUFFER_HEIGHT = 0x8D43;
const RENDERBUFFER_INTERNAL_FORMAT = 0x8D44;
const RENDERBUFFER_RED_SIZE = 0x8D50;
const RENDERBUFFER_GREEN_SIZE = 0x8D51;
const RENDERBUFFER_BLUE_SIZE = 0x8D52;
const RENDERBUFFER_ALPHA_SIZE = 0x8D53;
const RENDERBUFFER_DEPTH_SIZE = 0x8D54;
const RENDERBUFFER_STENCIL_SIZE = 0x8D55;
const FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8CD0;
const FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8CD1;
const FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8CD2;
const FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8CD3;
const COLOR_ATTACHMENT0 = 0x8CE0;
const DEPTH_ATTACHMENT = 0x8D00;
const STENCIL_ATTACHMENT = 0x8D20;
// export const DEPTH_STENCIL_ATTACHMENT = 0x821A;
const NONE = 0;
const FRAMEBUFFER_COMPLETE = 0x8CD5;
const FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8CD6;
const FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8CD7;
const FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8CD9;
const FRAMEBUFFER_UNSUPPORTED = 0x8CDD;
const FRAMEBUFFER_BINDING = 0x8CA6;
const RENDERBUFFER_BINDING = 0x8CA7;
const MAX_RENDERBUFFER_SIZE = 0x84E8;
const INVALID_FRAMEBUFFER_OPERATION = 0x0506;


// Pixel storage modes

const UNPACK_FLIP_Y_WEBGL = 0x9240;
const UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241;
const UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243;


/**
 * Standard WebGL 2 constants
 */

// Getting GL parameter information

const READ_BUFFER = 0x0C02;
const UNPACK_ROW_LENGTH = 0x0CF2;
const UNPACK_SKIP_ROWS = 0x0CF3;
const UNPACK_SKIP_PIXELS = 0x0CF4;
const PACK_ROW_LENGTH = 0x0D02;
const PACK_SKIP_ROWS = 0x0D03;
const PACK_SKIP_PIXELS = 0x0D04;
const TEXTURE_BINDING_3D = 0x806A;
const UNPACK_SKIP_IMAGES = 0x806D;
const UNPACK_IMAGE_HEIGHT = 0x806E;
const MAX_3D_TEXTURE_SIZE = 0x8073;
const MAX_ELEMENTS_VERTICES = 0x80E8;
const MAX_ELEMENTS_INDICES = 0x80E9;
const MAX_TEXTURE_LOD_BIAS = 0x84FD;
const MAX_FRAGMENT_UNIFORM_COMPONENTS = 0x8B49;
const MAX_VERTEX_UNIFORM_COMPONENTS = 0x8B4A;
const MAX_ARRAY_TEXTURE_LAYERS = 0x88FF;
const MIN_PROGRAM_TEXEL_OFFSET = 0x8904;
const MAX_PROGRAM_TEXEL_OFFSET = 0x8905;
const MAX_VARYING_COMPONENTS = 0x8B4B;
const FRAGMENT_SHADER_DERIVATIVE_HINT = 0x8B8B;
const RASTERIZER_DISCARD = 0x8C89;
const VERTEX_ARRAY_BINDING = 0x85B5;
const MAX_VERTEX_OUTPUT_COMPONENTS = 0x9122;
const MAX_FRAGMENT_INPUT_COMPONENTS = 0x9125;
const MAX_SERVER_WAIT_TIMEOUT = 0x9111;
const MAX_ELEMENT_INDEX = 0x8D6B;

// extures

const RED = 0x1903;
const RGB8 = 0x8051;
const RGBA8 = 0x8058;
const RGB10_A2 = 0x8059;
const TEXTURE_3D = 0x806F;
const TEXTURE_WRAP_R = 0x8072;
const TEXTURE_MIN_LOD = 0x813A;
const TEXTURE_MAX_LOD = 0x813B;
const TEXTURE_BASE_LEVEL = 0x813C;
const TEXTURE_MAX_LEVEL = 0x813D;
const TEXTURE_COMPARE_MODE = 0x884C;
const TEXTURE_COMPARE_FUNC = 0x884D;
const SRGB = 0x8C40;
const SRGB8 = 0x8C41;
const SRGB8_ALPHA8 = 0x8C43;
const COMPARE_REF_TO_TEXTURE = 0x884E;
const RGBA32F = 0x8814;
const RGB32F = 0x8815;
const RGBA16F = 0x881A;
const RGB16F = 0x881B;
const TEXTURE_2D_ARRAY = 0x8C1A;
const TEXTURE_BINDING_2D_ARRAY = 0x8C1D;
const R11F_G11F_B10F = 0x8C3A;
const RGB9_E5 = 0x8C3D;
const RGBA32UI = 0x8D70;
const RGB32UI = 0x8D71;
const RGBA16UI = 0x8D76;
const RGB16UI = 0x8D77;
const RGBA8UI = 0x8D7C;
const RGB8UI = 0x8D7D;
const RGBA32I = 0x8D82;
const RGB32I = 0x8D83;
const RGBA16I = 0x8D88;
const RGB16I = 0x8D89;
const RGBA8I = 0x8D8E;
const RGB8I = 0x8D8F;
const RED_INTEGER = 0x8D94;
const RGB_INTEGER = 0x8D98;
const RGBA_INTEGER = 0x8D99;
const R8 = 0x8229;
const RG8 = 0x822B;
const R16F = 0x822D;
const R32F = 0x822E;
const RG16F = 0x822F;
const RG32F = 0x8230;
const R8I = 0x8231;
const R8UI = 0x8232;
const R16I = 0x8233;
const R16UI = 0x8234;
const R32I = 0x8235;
const R32UI = 0x8236;
const RG8I = 0x8237;
const RG8UI = 0x8238;
const RG16I = 0x8239;
const RG16UI = 0x823A;
const RG32I = 0x823B;
const RG32UI = 0x823C;
const R8_SNORM = 0x8F94;
const RG8_SNORM = 0x8F95;
const RGB8_SNORM = 0x8F96;
const RGBA8_SNORM = 0x8F97;
const RGB10_A2UI = 0x906F;
const TEXTURE_IMMUTABLE_FORMAT = 0x912F;
const TEXTURE_IMMUTABLE_LEVELS = 0x82DF;

// Pixel types

const UNSIGNED_INT_2_10_10_10_REV = 0x8368;
const UNSIGNED_INT_10F_11F_11F_REV = 0x8C3B;
const UNSIGNED_INT_5_9_9_9_REV = 0x8C3E;
const FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8DAD;
const UNSIGNED_INT_24_8 = 0x84FA;
const HALF_FLOAT = 0x140B;
const RG = 0x8227;
const RG_INTEGER = 0x8228;
const INT_2_10_10_10_REV = 0x8D9F;

// Queries

const CURRENT_QUERY = 0x8865;
const QUERY_RESULT = 0x8866;
const QUERY_RESULT_AVAILABLE = 0x8867;
const ANY_SAMPLES_PASSED = 0x8C2F;
const ANY_SAMPLES_PASSED_CONSERVATIVE = 0x8D6A;

// Draw buffers
const MAX_DRAW_BUFFERS = 0x8824;
const DRAW_BUFFER0 = 0x8825;
const DRAW_BUFFER1 = 0x8826;
const DRAW_BUFFER2 = 0x8827;
const DRAW_BUFFER3 = 0x8828;
const DRAW_BUFFER4 = 0x8829;
const DRAW_BUFFER5 = 0x882A;
const DRAW_BUFFER6 = 0x882B;
const DRAW_BUFFER7 = 0x882C;
const DRAW_BUFFER8 = 0x882D;
const DRAW_BUFFER9 = 0x882E;
const DRAW_BUFFER10 = 0x882F;
const DRAW_BUFFER11 = 0x8830;
const DRAW_BUFFER12 = 0x8831;
const DRAW_BUFFER13 = 0x8832;
const DRAW_BUFFER14 = 0x8833;
const DRAW_BUFFER15 = 0x8834;
const MAX_COLOR_ATTACHMENTS = 0x8CDF;
const COLOR_ATTACHMENT1 = 0x8CE1;
const COLOR_ATTACHMENT2 = 0x8CE2;
const COLOR_ATTACHMENT3 = 0x8CE3;
const COLOR_ATTACHMENT4 = 0x8CE4;
const COLOR_ATTACHMENT5 = 0x8CE5;
const COLOR_ATTACHMENT6 = 0x8CE6;
const COLOR_ATTACHMENT7 = 0x8CE7;
const COLOR_ATTACHMENT8 = 0x8CE8;
const COLOR_ATTACHMENT9 = 0x8CE9;
const COLOR_ATTACHMENT10 = 0x8CEA;
const COLOR_ATTACHMENT11 = 0x8CEB;
const COLOR_ATTACHMENT12 = 0x8CEC;
const COLOR_ATTACHMENT13 = 0x8CED;
const COLOR_ATTACHMENT14 = 0x8CEE;
const COLOR_ATTACHMENT15 = 0x8CEF;
const SAMPLER_3D = 0x8B5F;
const SAMPLER_2D_SHADOW = 0x8B62;
const SAMPLER_2D_ARRAY = 0x8DC1;
const SAMPLER_2D_ARRAY_SHADOW = 0x8DC4;
const SAMPLER_CUBE_SHADOW = 0x8DC5;
const INT_SAMPLER_2D = 0x8DCA;
const INT_SAMPLER_3D = 0x8DCB;
const INT_SAMPLER_CUBE = 0x8DCC;
const INT_SAMPLER_2D_ARRAY = 0x8DCF;
const UNSIGNED_INT_SAMPLER_2D = 0x8DD2;
const UNSIGNED_INT_SAMPLER_3D = 0x8DD3;
const UNSIGNED_INT_SAMPLER_CUBE = 0x8DD4;
const UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8DD7;
const MAX_SAMPLES = 0x8D57;
const SAMPLER_BINDING = 0x8919;

// Buffers
// Constant name	Value	Description

const PIXEL_PACK_BUFFER = 0x88EB;
const PIXEL_UNPACK_BUFFER = 0x88EC;
const PIXEL_PACK_BUFFER_BINDING = 0x88ED;
const PIXEL_UNPACK_BUFFER_BINDING = 0x88EF;
const COPY_READ_BUFFER = 0x8F36;
const COPY_WRITE_BUFFER = 0x8F37;
const COPY_READ_BUFFER_BINDING = 0x8F36;
const COPY_WRITE_BUFFER_BINDING = 0x8F37;

// Data types

const FLOAT_MAT2x3 = 0x8B65;
const FLOAT_MAT2x4 = 0x8B66;
const FLOAT_MAT3x2 = 0x8B67;
const FLOAT_MAT3x4 = 0x8B68;
const FLOAT_MAT4x2 = 0x8B69;
const FLOAT_MAT4x3 = 0x8B6A;
const UNSIGNED_INT_VEC2 = 0x8DC6;
const UNSIGNED_INT_VEC3 = 0x8DC7;
const UNSIGNED_INT_VEC4 = 0x8DC8;
const UNSIGNED_NORMALIZED = 0x8C17;
const SIGNED_NORMALIZED = 0x8F9C;

// Vertex attributes

const VERTEX_ATTRIB_ARRAY_INTEGER = 0x88FD;
const VERTEX_ATTRIB_ARRAY_DIVISOR = 0x88FE;

// Transform feedback

const TRANSFORM_FEEDBACK_BUFFER_MODE = 0x8C7F;
const MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = 0x8C80;
const TRANSFORM_FEEDBACK_VARYINGS = 0x8C83;
const TRANSFORM_FEEDBACK_BUFFER_START = 0x8C84;
const TRANSFORM_FEEDBACK_BUFFER_SIZE = 0x8C85;
const TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = 0x8C88;
const MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS = 0x8C8A;
const MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS = 0x8C8B;
const INTERLEAVED_ATTRIBS = 0x8C8C;
const SEPARATE_ATTRIBS = 0x8C8D;
const TRANSFORM_FEEDBACK_BUFFER = 0x8C8E;
const TRANSFORM_FEEDBACK_BUFFER_BINDING = 0x8C8F;
const TRANSFORM_FEEDBACK = 0x8E22;
const TRANSFORM_FEEDBACK_PAUSED = 0x8E23;
const TRANSFORM_FEEDBACK_ACTIVE = 0x8E24;
const TRANSFORM_FEEDBACK_BINDING = 0x8E25;

// Framebuffers and renderbuffers

const FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = 0x8210;
const FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE = 0x8211;
const FRAMEBUFFER_ATTACHMENT_RED_SIZE = 0x8212;
const FRAMEBUFFER_ATTACHMENT_GREEN_SIZE = 0x8213;
const FRAMEBUFFER_ATTACHMENT_BLUE_SIZE = 0x8214;
const FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE = 0x8215;
const FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE = 0x8216;
const FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE = 0x8217;
const FRAMEBUFFER_DEFAULT = 0x8218;
const DEPTH_STENCIL_ATTACHMENT = 0x821A;
const DEPTH_STENCIL = 0x84F9;
const DEPTH24_STENCIL8 = 0x88F0;
const DRAW_FRAMEBUFFER_BINDING = 0x8CA6;
const READ_FRAMEBUFFER = 0x8CA8;
const DRAW_FRAMEBUFFER = 0x8CA9;
const READ_FRAMEBUFFER_BINDING = 0x8CAA;
const RENDERBUFFER_SAMPLES = 0x8CAB;
const FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = 0x8CD4;
const FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = 0x8D56;

// Uniform

const UNIFORM_BUFFER = 0x8A11;
const UNIFORM_BUFFER_BINDING = 0x8A28;
const UNIFORM_BUFFER_START = 0x8A29;
const UNIFORM_BUFFER_SIZE = 0x8A2A;
const MAX_VERTEX_UNIFORM_BLOCKS = 0x8A2B;
const MAX_FRAGMENT_UNIFORM_BLOCKS = 0x8A2D;
const MAX_COMBINED_UNIFORM_BLOCKS = 0x8A2E;
const MAX_UNIFORM_BUFFER_BINDINGS = 0x8A2F;
const MAX_UNIFORM_BLOCK_SIZE = 0x8A30;
const MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = 0x8A31;
const MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = 0x8A33;
const UNIFORM_BUFFER_OFFSET_ALIGNMENT = 0x8A34;
const ACTIVE_UNIFORM_BLOCKS = 0x8A36;
const UNIFORM_TYPE = 0x8A37;
const UNIFORM_SIZE = 0x8A38;
const UNIFORM_BLOCK_INDEX = 0x8A3A;
const UNIFORM_OFFSET = 0x8A3B;
const UNIFORM_ARRAY_STRIDE = 0x8A3C;
const UNIFORM_MATRIX_STRIDE = 0x8A3D;
const UNIFORM_IS_ROW_MAJOR = 0x8A3E;
const UNIFORM_BLOCK_BINDING = 0x8A3F;
const UNIFORM_BLOCK_DATA_SIZE = 0x8A40;
const UNIFORM_BLOCK_ACTIVE_UNIFORMS = 0x8A42;
const UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 0x8A43;
const UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 0x8A44;
const UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 0x8A46;

// Sync objects

const OBJECT_TYPE = 0x9112;
const SYNC_CONDITION = 0x9113;
const SYNC_STATUS = 0x9114;
const SYNC_FLAGS = 0x9115;
const SYNC_FENCE = 0x9116;
const SYNC_GPU_COMMANDS_COMPLETE = 0x9117;
const UNSIGNALED = 0x9118;
const SIGNALED = 0x9119;
const ALREADY_SIGNALED = 0x911A;
const TIMEOUT_EXPIRED = 0x911B;
const CONDITION_SATISFIED = 0x911C;
const WAIT_FAILED = 0x911D;
const SYNC_FLUSH_COMMANDS_BIT = 0x00000001;

// Miscellaneous constants

const COLOR = 0x1800;
const DEPTH = 0x1801;
const STENCIL = 0x1802;
const MIN = 0x8007;
const MAX = 0x8008;
const DEPTH_COMPONENT24 = 0x81A6;
const STREAM_READ = 0x88E1;
const STREAM_COPY = 0x88E2;
const STATIC_READ = 0x88E5;
const STATIC_COPY = 0x88E6;
const DYNAMIC_READ = 0x88E9;
const DYNAMIC_COPY = 0x88EA;
const DEPTH_COMPONENT32F = 0x8CAC;
const DEPTH32F_STENCIL8 = 0x8CAD;
const INVALID_INDEX = 0xFFFFFFFF;
const TIMEOUT_IGNORED = -1;
const MAX_CLIENT_WAIT_TIMEOUT_WEBGL = 0x9247;

/**
* Constants defined in WebGL extensions
*/

// ANGLE_instanced_arrays

const VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE = 0x88FE; //Describes the frequency divisor used for instanced rendering.

// WEBGL_debug_renderer_info

const UNMASKED_VENDOR_WEBGL = 0x9245; //Passed to getParameter to get the vendor string of the graphics driver.
const UNMASKED_RENDERER_WEBGL = 0x9246; //Passed to getParameter to get the renderer string of the graphics driver.

// EXT_texture_filter_anisotropic

const MAX_TEXTURE_MAX_ANISOTROPY_EXT = 0x84FF; //Returns the maximum available anisotropy.
const TEXTURE_MAX_ANISOTROPY_EXT = 0x84FE; //Passed to texParameter to set the desired maximum anisotropy for a texture.

// WEBGL_compressed_texture_s3tc

const COMPRESSED_RGB_S3TC_DXT1_EXT = 0x83F0; //A DXT1-compressed image in an RGB image format.
const COMPRESSED_RGBA_S3TC_DXT1_EXT = 0x83F1; //A DXT1-compressed image in an RGB image format with a simple on/off alpha value.
const COMPRESSED_RGBA_S3TC_DXT3_EXT = 0x83F2; //A DXT3-compressed image in an RGBA image format. Compared to a 32-bit RGBA texture, it offers 4:1 compression.
const COMPRESSED_RGBA_S3TC_DXT5_EXT = 0x83F3; //A DXT5-compressed image in an RGBA image format. It also provides a 4:1 compression, but differs to the DXT3 compression in how the alpha compression is done.

// WEBGL_compressed_texture_etc

const COMPRESSED_R11_EAC= 0x9270; //One-channel (red) unsigned format compression.
const COMPRESSED_SIGNED_R11_EAC= 0x9271; //One-channel (red) signed format compression.
const COMPRESSED_RG11_EAC= 0x9272; //Two-channel (red and green) unsigned format compression.
const COMPRESSED_SIGNED_RG11_EAC= 0x9273; //Two-channel (red and green) signed format compression.
const COMPRESSED_RGB8_ETC2= 0x9274; //Compresses RBG8 data with no alpha channel.
const COMPRESSED_RGBA8_ETC2_EAC= 0x9275; //Compresses RGBA8 data. The RGB part is encoded the same as RGB_ETC2, but the alpha part is encoded separately.
const COMPRESSED_SRGB8_ETC2= 0x9276; //Compresses sRBG8 data with no alpha channel.
const COMPRESSED_SRGB8_ALPHA8_ETC2_EAC= 0x9277; //Compresses sRGBA8 data. The sRGB part is encoded the same as SRGB_ETC2, but the alpha part is encoded separately.
const COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2= 0x9278; //Similar to RGB8_ETC, but with ability to punch through the alpha channel, which means to make it completely opaque or transparent.
const COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2= 0x9279; //Similar to SRGB8_ETC, but with ability to punch through the alpha channel, which means to make it completely opaque or transparent.

// WEBGL_compressed_texture_pvrtc

const COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 0x8C00; // RGB compression in 4-bit mode. One block for each 4×4 pixels.
const COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 0x8C02; // RGBA compression in 4-bit mode. One block for each 4×4 pixels.
const COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 0x8C01; // RGB compression in 2-bit mode. One block for each 8×4 pixels.
const COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 0x8C03; // RGBA compression in 2-bit mode. One block for each 8×4 pixe

// WEBGL_compressed_texture_etc1

const COMPRESSED_RGB_ETC1_WEBGL = 0x8D64; // Compresses 24-bit RGB data with no alpha channel.

// WEBGL_compressed_texture_atc

const COMPRESSED_RGB_ATC_WEBGL = 0x8C92; // Compresses RGB textures with no alpha channel.
const COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 0x8C92; // Compresses RGBA textures using explicit alpha encoding (useful when alpha transitions are sharp).
const COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 0x87EE; // Compresses RGBA textures using interpolated alpha encoding (useful when alpha transitions are gradient).

// WEBGL_depth_texture

const UNSIGNED_INT_24_8_WEBGL = 0x84FA; // Unsigned integer type for 24-bit depth texture data.

// OES_texture_half_float

const HALF_FLOAT_OES = 0x8D61; // Half floating-point type (16-bit).

// WEBGL_color_buffer_float

const RGBA32F_EXT = 0x8814; // RGBA 32-bit floating-point color-renderable format.
const RGB32F_EXT = 0x8815; // RGB 32-bit floating-point color-renderable format.
const FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT = 0x821; //
const UNSIGNED_NORMALIZED_EXT = 0x8C1; //

// EXT_blend_minmax

const MIN_EXT = 0x8007; // Produces the minimum color components of the source and destination colors.
const MAX_EXT = 0x8008; // Produces the maximum color components of the source and destination colors.

// EXT_sRGB

const SRGB_EXT = 0x8C40; // Unsized sRGB format that leaves the precision up to the driver.
const SRGB_ALPHA_EXT = 0x8C42; // Unsized sRGB format with unsized alpha component.
const SRGB8_ALPHA8_EXT = 0x8C43; // Sized (8-bit) sRGB and alpha formats.
const FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT = 0x8210; // Returns the framebuffer color encoding.

// OES_standard_derivatives

const FRAGMENT_SHADER_DERIVATIVE_HINT_OES = 0x8B8B; // Indicates the accuracy of the derivative calculation for the GLSL built-in functions: dFdx, dFdy, and fwidth.

// WEBGL_draw_buffers

const COLOR_ATTACHMENT0_WEBGL = 0x8CE0; // Framebuffer color attachment point
const COLOR_ATTACHMENT1_WEBGL = 0x8CE1; // Framebuffer color attachment point
const COLOR_ATTACHMENT2_WEBGL = 0x8CE2; // Framebuffer color attachment point
const COLOR_ATTACHMENT3_WEBGL = 0x8CE3; // Framebuffer color attachment point
const COLOR_ATTACHMENT4_WEBGL = 0x8CE4; // Framebuffer color attachment point
const COLOR_ATTACHMENT5_WEBGL = 0x8CE5; // Framebuffer color attachment point
const COLOR_ATTACHMENT6_WEBGL = 0x8CE6; // Framebuffer color attachment point
const COLOR_ATTACHMENT7_WEBGL = 0x8CE7; // Framebuffer color attachment point
const COLOR_ATTACHMENT8_WEBGL = 0x8CE8; // Framebuffer color attachment point
const COLOR_ATTACHMENT9_WEBGL = 0x8CE9; // Framebuffer color attachment point
const COLOR_ATTACHMENT10_WEBGL = 0x8CEA; // Framebuffer color attachment point
const COLOR_ATTACHMENT11_WEBGL = 0x8CEB; // Framebuffer color attachment point
const COLOR_ATTACHMENT12_WEBGL = 0x8CEC; // Framebuffer color attachment point
const COLOR_ATTACHMENT13_WEBGL = 0x8CED; // Framebuffer color attachment point
const COLOR_ATTACHMENT14_WEBGL = 0x8CEE; // Framebuffer color attachment point
const COLOR_ATTACHMENT15_WEBGL = 0x8CEF; // Framebuffer color attachment point
const DRAW_BUFFER0_WEBGL = 0x8825; // Draw buffer
const DRAW_BUFFER1_WEBGL = 0x8826; // Draw buffer
const DRAW_BUFFER2_WEBGL = 0x8827; // Draw buffer
const DRAW_BUFFER3_WEBGL = 0x8828; // Draw buffer
const DRAW_BUFFER4_WEBGL = 0x8829; // Draw buffer
const DRAW_BUFFER5_WEBGL = 0x882A; // Draw buffer
const DRAW_BUFFER6_WEBGL = 0x882B; // Draw buffer
const DRAW_BUFFER7_WEBGL = 0x882C; // Draw buffer
const DRAW_BUFFER8_WEBGL = 0x882D; // Draw buffer
const DRAW_BUFFER9_WEBGL = 0x882E; // Draw buffer
const DRAW_BUFFER10_WEBGL = 0x882F; // Draw buffer
const DRAW_BUFFER11_WEBGL = 0x8830; // Draw buffer
const DRAW_BUFFER12_WEBGL = 0x8831; // Draw buffer
const DRAW_BUFFER13_WEBGL = 0x8832; // Draw buffer
const DRAW_BUFFER14_WEBGL = 0x8833; // Draw buffer
const DRAW_BUFFER15_WEBGL = 0x8834; // Draw buffer
const MAX_COLOR_ATTACHMENTS_WEBGL = 0x8CDF; // Maximum number of framebuffer color attachment points
const MAX_DRAW_BUFFERS_WEBGL = 0x8824; // Maximum number of draw buffers

// OES_vertex_array_object

const VERTEX_ARRAY_BINDING_OES = 0x85B5; // The bound vertex array object (VAO).

// EXT_disjoint_timer_query

const QUERY_COUNTER_BITS_EXT = 0x8864; // The number of bits used to hold the query result for the given target.
const CURRENT_QUERY_EXT = 0x8865; // The currently active query.
const QUERY_RESULT_EXT = 0x8866; // The query result.
const QUERY_RESULT_AVAILABLE_EXT = 0x8867; // A Boolean indicating whether or not a query result is available.
const TIME_ELAPSED_EXT = 0x88BF; // Elapsed time (in nanoseconds).
const TIMESTAMP_EXT = 0x8E28; // The current time.
const GPU_DISJOINT_EXT = 0x8FBB; // A Boolean indicating whether or not the GPU performed any disjoint operation.

export { DEPTH_BUFFER_BIT, STENCIL_BUFFER_BIT, COLOR_BUFFER_BIT, POINTS, LINES, LINE_LOOP, LINE_STRIP, TRIANGLES, TRIANGLE_STRIP, TRIANGLE_FAN, ZERO, ONE, SRC_COLOR, ONE_MINUS_SRC_COLOR, SRC_ALPHA, ONE_MINUS_SRC_ALPHA, DST_ALPHA, ONE_MINUS_DST_ALPHA, DST_COLOR, ONE_MINUS_DST_COLOR, SRC_ALPHA_SATURATE, CONSTANT_COLOR, ONE_MINUS_CONSTANT_COLOR, CONSTANT_ALPHA, ONE_MINUS_CONSTANT_ALPHA, FUNC_ADD, FUNC_SUBSTRACT, FUNC_REVERSE_SUBTRACT, BLEND_EQUATION, BLEND_EQUATION_RGB, BLEND_EQUATION_ALPHA, BLEND_DST_RGB, BLEND_SRC_RGB, BLEND_DST_ALPHA, BLEND_SRC_ALPHA, BLEND_COLOR, ARRAY_BUFFER_BINDING, ELEMENT_ARRAY_BUFFER_BINDING, LINE_WIDTH, ALIASED_POINT_SIZE_RANGE, ALIASED_LINE_WIDTH_RANGE, CULL_FACE_MODE, FRONT_FACE, DEPTH_RANGE, DEPTH_WRITEMASK, DEPTH_CLEAR_VALUE, DEPTH_FUNC, STENCIL_CLEAR_VALUE, STENCIL_FUNC, STENCIL_FAIL, STENCIL_PASS_DEPTH_FAIL, STENCIL_PASS_DEPTH_PASS, STENCIL_REF, STENCIL_VALUE_MASK, STENCIL_WRITEMASK, STENCIL_BACK_FUNC, STENCIL_BACK_FAIL, STENCIL_BACK_PASS_DEPTH_FAIL, STENCIL_BACK_PASS_DEPTH_PASS, STENCIL_BACK_REF, STENCIL_BACK_VALUE_MASK, STENCIL_BACK_WRITEMASK, VIEWPORT, SCISSOR_BOX, COLOR_CLEAR_VALUE, COLOR_WRITEMASK, UNPACK_ALIGNMENT, PACK_ALIGNMENT, MAX_TEXTURE_SIZE, MAX_VIEWPORT_DIMS, SUBPIXEL_BITS, RED_BITS, GREEN_BITS, BLUE_BITS, ALPHA_BITS, DEPTH_BITS, STENCIL_BITS, POLYGON_OFFSET_UNITS, POLYGON_OFFSET_FACTOR, TEXTURE_BINDING_2D, SAMPLE_BUFFERS, SAMPLES, SAMPLE_COVERAGE_VALUE, SAMPLE_COVERAGE_INVERT, COMPRESSED_TEXTURE_FORMATS, VENDOR, RENDERER, VERSION, IMPLEMENTATION_COLOR_READ_TYPE, IMPLEMENTATION_COLOR_READ_FORMAT, BROWSER_DEFAULT_WEBGL, STATIC_DRAW, STREAM_DRAW, DYNAMIC_DRAW, ARRAY_BUFFER, ELEMENT_ARRAY_BUFFER, BUFFER_SIZE, BUFFER_USAGE, CURRENT_VERTEX_ATTRIB, VERTEX_ATTRIB_ARRAY_ENABLED, VERTEX_ATTRIB_ARRAY_SIZE, VERTEX_ATTRIB_ARRAY_STRIDE, VERTEX_ATTRIB_ARRAY_TYPE, VERTEX_ATTRIB_ARRAY_NORMALIZED, VERTEX_ATTRIB_ARRAY_POINTER, VERTEX_ATTRIB_ARRAY_BUFFER_BINDING, CULL_FACE, FRONT, BACK, FRONT_AND_BACK, BLEND, DEPTH_TEST, DITHER, POLYGON_OFFSET_FILL, SAMPLE_ALPHA_TO_COVERAGE, SAMPLE_COVERAGE, SCISSOR_TEST, STENCIL_TEST, NO_ERROR, INVALID_ENUM, INVALID_VALUE, INVALID_OPERATION, OUT_OF_MEMORY, CONTEXT_LOST_WEBGL, CW, CCW, DONT_CARE, FASTEST, NICEST, GENERATE_MIPMAP_HINT, BYTE, UNSIGNED_BYTE, SHORT, UNSIGNED_SHORT, INT, UNSIGNED_INT, FLOAT, DEPTH_COMPONENT, ALPHA, RGB, RGBA, LUMINANCE, LUMINANCE_ALPHA, UNSIGNED_SHORT_4_4_4_4, UNSIGNED_SHORT_5_5_5_1, UNSIGNED_SHORT_5_6_5, FRAGMENT_SHADER, VERTEX_SHADER, COMPILE_STATUS, DELETE_STATUS, LINK_STATUS, VALIDATE_STATUS, ATTACHED_SHADERS, ACTIVE_ATTRIBUTES, ACTIVE_UNIFORMS, MAX_VERTEX_ATTRIBS, MAX_VERTEX_UNIFORM_VECTORS, MAX_VARYING_VECTORS, MAX_COMBINED_TEXTURE_IMAGE_UNITS, MAX_VERTEX_TEXTURE_IMAGE_UNITS, MAX_TEXTURE_IMAGE_UNITS, MAX_FRAGMENT_UNIFORM_VECTORS, SHADER_TYPE, SHADING_LANGUAGE_VERSION, CURRENT_PROGRAM, NEVER, ALWAYS, LESS, EQUAL, LEQUAL, GREATER, GEQUAL, NOTEQUAL, KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, DECR_WRAP, NEAREST, LINEAR, NEAREST_MIPMAP_NEAREST, LINEAR_MIPMAP_NEAREST, NEAREST_MIPMAP_LINEAR, LINEAR_MIPMAP_LINEAR, TEXTURE_MAG_FILTER, TEXTURE_MIN_FILTER, TEXTURE_WRAP_S, TEXTURE_WRAP_T, TEXTURE_2D, TEXTURE, TEXTURE_CUBE_MAP, TEXTURE_BINDING_CUBE_MAP, TEXTURE_CUBE_MAP_POSITIVE_X, TEXTURE_CUBE_MAP_NEGATIVE_X, TEXTURE_CUBE_MAP_POSITIVE_Y, TEXTURE_CUBE_MAP_NEGATIVE_Y, TEXTURE_CUBE_MAP_POSITIVE_Z, TEXTURE_CUBE_MAP_NEGATIVE_Z, MAX_CUBE_MAP_TEXTURE_SIZE, TEXTURE0, ACTIVE_TEXTURE, REPEAT, CLAMP_TO_EDGE, MIRRORED_REPEAT, FLOAT_VEC2, FLOAT_VEC3, FLOAT_VEC4, INT_VEC2, INT_VEC3, INT_VEC4, BOOL, BOOL_VEC2, BOOL_VEC3, BOOL_VEC4, FLOAT_MAT2, FLOAT_MAT3, FLOAT_MAT4, SAMPLER_2D, SAMPLER_CUBE, LOW_FLOAT, MEDIUM_FLOAT, HIGH_FLOAT, LOW_INT, MEDIUM_INT, HIGH_INT, FRAMEBUFFER, RENDERBUFFER, RGBA4, RGB5_A1, RGB565, DEPTH_COMPONENT16, STENCIL_INDEX, STENCIL_INDEX8, RENDERBUFFER_WIDTH, RENDERBUFFER_HEIGHT, RENDERBUFFER_INTERNAL_FORMAT, RENDERBUFFER_RED_SIZE, RENDERBUFFER_GREEN_SIZE, RENDERBUFFER_BLUE_SIZE, RENDERBUFFER_ALPHA_SIZE, RENDERBUFFER_DEPTH_SIZE, RENDERBUFFER_STENCIL_SIZE, FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE, FRAMEBUFFER_ATTACHMENT_OBJECT_NAME, FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL, FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE, COLOR_ATTACHMENT0, DEPTH_ATTACHMENT, STENCIL_ATTACHMENT, NONE, FRAMEBUFFER_COMPLETE, FRAMEBUFFER_INCOMPLETE_ATTACHMENT, FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT, FRAMEBUFFER_INCOMPLETE_DIMENSIONS, FRAMEBUFFER_UNSUPPORTED, FRAMEBUFFER_BINDING, RENDERBUFFER_BINDING, MAX_RENDERBUFFER_SIZE, INVALID_FRAMEBUFFER_OPERATION, UNPACK_FLIP_Y_WEBGL, UNPACK_PREMULTIPLY_ALPHA_WEBGL, UNPACK_COLORSPACE_CONVERSION_WEBGL, READ_BUFFER, UNPACK_ROW_LENGTH, UNPACK_SKIP_ROWS, UNPACK_SKIP_PIXELS, PACK_ROW_LENGTH, PACK_SKIP_ROWS, PACK_SKIP_PIXELS, TEXTURE_BINDING_3D, UNPACK_SKIP_IMAGES, UNPACK_IMAGE_HEIGHT, MAX_3D_TEXTURE_SIZE, MAX_ELEMENTS_VERTICES, MAX_ELEMENTS_INDICES, MAX_TEXTURE_LOD_BIAS, MAX_FRAGMENT_UNIFORM_COMPONENTS, MAX_VERTEX_UNIFORM_COMPONENTS, MAX_ARRAY_TEXTURE_LAYERS, MIN_PROGRAM_TEXEL_OFFSET, MAX_PROGRAM_TEXEL_OFFSET, MAX_VARYING_COMPONENTS, FRAGMENT_SHADER_DERIVATIVE_HINT, RASTERIZER_DISCARD, VERTEX_ARRAY_BINDING, MAX_VERTEX_OUTPUT_COMPONENTS, MAX_FRAGMENT_INPUT_COMPONENTS, MAX_SERVER_WAIT_TIMEOUT, MAX_ELEMENT_INDEX, RED, RGB8, RGBA8, RGB10_A2, TEXTURE_3D, TEXTURE_WRAP_R, TEXTURE_MIN_LOD, TEXTURE_MAX_LOD, TEXTURE_BASE_LEVEL, TEXTURE_MAX_LEVEL, TEXTURE_COMPARE_MODE, TEXTURE_COMPARE_FUNC, SRGB, SRGB8, SRGB8_ALPHA8, COMPARE_REF_TO_TEXTURE, RGBA32F, RGB32F, RGBA16F, RGB16F, TEXTURE_2D_ARRAY, TEXTURE_BINDING_2D_ARRAY, R11F_G11F_B10F, RGB9_E5, RGBA32UI, RGB32UI, RGBA16UI, RGB16UI, RGBA8UI, RGB8UI, RGBA32I, RGB32I, RGBA16I, RGB16I, RGBA8I, RGB8I, RED_INTEGER, RGB_INTEGER, RGBA_INTEGER, R8, RG8, R16F, R32F, RG16F, RG32F, R8I, R8UI, R16I, R16UI, R32I, R32UI, RG8I, RG8UI, RG16I, RG16UI, RG32I, RG32UI, R8_SNORM, RG8_SNORM, RGB8_SNORM, RGBA8_SNORM, RGB10_A2UI, TEXTURE_IMMUTABLE_FORMAT, TEXTURE_IMMUTABLE_LEVELS, UNSIGNED_INT_2_10_10_10_REV, UNSIGNED_INT_10F_11F_11F_REV, UNSIGNED_INT_5_9_9_9_REV, FLOAT_32_UNSIGNED_INT_24_8_REV, UNSIGNED_INT_24_8, HALF_FLOAT, RG, RG_INTEGER, INT_2_10_10_10_REV, CURRENT_QUERY, QUERY_RESULT, QUERY_RESULT_AVAILABLE, ANY_SAMPLES_PASSED, ANY_SAMPLES_PASSED_CONSERVATIVE, MAX_DRAW_BUFFERS, DRAW_BUFFER0, DRAW_BUFFER1, DRAW_BUFFER2, DRAW_BUFFER3, DRAW_BUFFER4, DRAW_BUFFER5, DRAW_BUFFER6, DRAW_BUFFER7, DRAW_BUFFER8, DRAW_BUFFER9, DRAW_BUFFER10, DRAW_BUFFER11, DRAW_BUFFER12, DRAW_BUFFER13, DRAW_BUFFER14, DRAW_BUFFER15, MAX_COLOR_ATTACHMENTS, COLOR_ATTACHMENT1, COLOR_ATTACHMENT2, COLOR_ATTACHMENT3, COLOR_ATTACHMENT4, COLOR_ATTACHMENT5, COLOR_ATTACHMENT6, COLOR_ATTACHMENT7, COLOR_ATTACHMENT8, COLOR_ATTACHMENT9, COLOR_ATTACHMENT10, COLOR_ATTACHMENT11, COLOR_ATTACHMENT12, COLOR_ATTACHMENT13, COLOR_ATTACHMENT14, COLOR_ATTACHMENT15, SAMPLER_3D, SAMPLER_2D_SHADOW, SAMPLER_2D_ARRAY, SAMPLER_2D_ARRAY_SHADOW, SAMPLER_CUBE_SHADOW, INT_SAMPLER_2D, INT_SAMPLER_3D, INT_SAMPLER_CUBE, INT_SAMPLER_2D_ARRAY, UNSIGNED_INT_SAMPLER_2D, UNSIGNED_INT_SAMPLER_3D, UNSIGNED_INT_SAMPLER_CUBE, UNSIGNED_INT_SAMPLER_2D_ARRAY, MAX_SAMPLES, SAMPLER_BINDING, PIXEL_PACK_BUFFER, PIXEL_UNPACK_BUFFER, PIXEL_PACK_BUFFER_BINDING, PIXEL_UNPACK_BUFFER_BINDING, COPY_READ_BUFFER, COPY_WRITE_BUFFER, COPY_READ_BUFFER_BINDING, COPY_WRITE_BUFFER_BINDING, FLOAT_MAT2x3, FLOAT_MAT2x4, FLOAT_MAT3x2, FLOAT_MAT3x4, FLOAT_MAT4x2, FLOAT_MAT4x3, UNSIGNED_INT_VEC2, UNSIGNED_INT_VEC3, UNSIGNED_INT_VEC4, UNSIGNED_NORMALIZED, SIGNED_NORMALIZED, VERTEX_ATTRIB_ARRAY_INTEGER, VERTEX_ATTRIB_ARRAY_DIVISOR, TRANSFORM_FEEDBACK_BUFFER_MODE, MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS, TRANSFORM_FEEDBACK_VARYINGS, TRANSFORM_FEEDBACK_BUFFER_START, TRANSFORM_FEEDBACK_BUFFER_SIZE, TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN, MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS, MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS, INTERLEAVED_ATTRIBS, SEPARATE_ATTRIBS, TRANSFORM_FEEDBACK_BUFFER, TRANSFORM_FEEDBACK_BUFFER_BINDING, TRANSFORM_FEEDBACK, TRANSFORM_FEEDBACK_PAUSED, TRANSFORM_FEEDBACK_ACTIVE, TRANSFORM_FEEDBACK_BINDING, FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING, FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE, FRAMEBUFFER_ATTACHMENT_RED_SIZE, FRAMEBUFFER_ATTACHMENT_GREEN_SIZE, FRAMEBUFFER_ATTACHMENT_BLUE_SIZE, FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE, FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE, FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE, FRAMEBUFFER_DEFAULT, DEPTH_STENCIL_ATTACHMENT, DEPTH_STENCIL, DEPTH24_STENCIL8, DRAW_FRAMEBUFFER_BINDING, READ_FRAMEBUFFER, DRAW_FRAMEBUFFER, READ_FRAMEBUFFER_BINDING, RENDERBUFFER_SAMPLES, FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER, FRAMEBUFFER_INCOMPLETE_MULTISAMPLE, UNIFORM_BUFFER, UNIFORM_BUFFER_BINDING, UNIFORM_BUFFER_START, UNIFORM_BUFFER_SIZE, MAX_VERTEX_UNIFORM_BLOCKS, MAX_FRAGMENT_UNIFORM_BLOCKS, MAX_COMBINED_UNIFORM_BLOCKS, MAX_UNIFORM_BUFFER_BINDINGS, MAX_UNIFORM_BLOCK_SIZE, MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS, MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS, UNIFORM_BUFFER_OFFSET_ALIGNMENT, ACTIVE_UNIFORM_BLOCKS, UNIFORM_TYPE, UNIFORM_SIZE, UNIFORM_BLOCK_INDEX, UNIFORM_OFFSET, UNIFORM_ARRAY_STRIDE, UNIFORM_MATRIX_STRIDE, UNIFORM_IS_ROW_MAJOR, UNIFORM_BLOCK_BINDING, UNIFORM_BLOCK_DATA_SIZE, UNIFORM_BLOCK_ACTIVE_UNIFORMS, UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES, UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER, UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER, OBJECT_TYPE, SYNC_CONDITION, SYNC_STATUS, SYNC_FLAGS, SYNC_FENCE, SYNC_GPU_COMMANDS_COMPLETE, UNSIGNALED, SIGNALED, ALREADY_SIGNALED, TIMEOUT_EXPIRED, CONDITION_SATISFIED, WAIT_FAILED, SYNC_FLUSH_COMMANDS_BIT, COLOR, DEPTH, STENCIL, MIN, MAX, DEPTH_COMPONENT24, STREAM_READ, STREAM_COPY, STATIC_READ, STATIC_COPY, DYNAMIC_READ, DYNAMIC_COPY, DEPTH_COMPONENT32F, DEPTH32F_STENCIL8, INVALID_INDEX, TIMEOUT_IGNORED, MAX_CLIENT_WAIT_TIMEOUT_WEBGL, VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE, UNMASKED_VENDOR_WEBGL, UNMASKED_RENDERER_WEBGL, MAX_TEXTURE_MAX_ANISOTROPY_EXT, TEXTURE_MAX_ANISOTROPY_EXT, COMPRESSED_RGB_S3TC_DXT1_EXT, COMPRESSED_RGBA_S3TC_DXT1_EXT, COMPRESSED_RGBA_S3TC_DXT3_EXT, COMPRESSED_RGBA_S3TC_DXT5_EXT, COMPRESSED_R11_EAC, COMPRESSED_SIGNED_R11_EAC, COMPRESSED_RG11_EAC, COMPRESSED_SIGNED_RG11_EAC, COMPRESSED_RGB8_ETC2, COMPRESSED_RGBA8_ETC2_EAC, COMPRESSED_SRGB8_ETC2, COMPRESSED_SRGB8_ALPHA8_ETC2_EAC, COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2, COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2, COMPRESSED_RGB_PVRTC_4BPPV1_IMG, COMPRESSED_RGBA_PVRTC_4BPPV1_IMG, COMPRESSED_RGB_PVRTC_2BPPV1_IMG, COMPRESSED_RGBA_PVRTC_2BPPV1_IMG, COMPRESSED_RGB_ETC1_WEBGL, COMPRESSED_RGB_ATC_WEBGL, COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL, COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL, UNSIGNED_INT_24_8_WEBGL, HALF_FLOAT_OES, RGBA32F_EXT, RGB32F_EXT, FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT, UNSIGNED_NORMALIZED_EXT, MIN_EXT, MAX_EXT, SRGB_EXT, SRGB_ALPHA_EXT, SRGB8_ALPHA8_EXT, FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT, FRAGMENT_SHADER_DERIVATIVE_HINT_OES, COLOR_ATTACHMENT0_WEBGL, COLOR_ATTACHMENT1_WEBGL, COLOR_ATTACHMENT2_WEBGL, COLOR_ATTACHMENT3_WEBGL, COLOR_ATTACHMENT4_WEBGL, COLOR_ATTACHMENT5_WEBGL, COLOR_ATTACHMENT6_WEBGL, COLOR_ATTACHMENT7_WEBGL, COLOR_ATTACHMENT8_WEBGL, COLOR_ATTACHMENT9_WEBGL, COLOR_ATTACHMENT10_WEBGL, COLOR_ATTACHMENT11_WEBGL, COLOR_ATTACHMENT12_WEBGL, COLOR_ATTACHMENT13_WEBGL, COLOR_ATTACHMENT14_WEBGL, COLOR_ATTACHMENT15_WEBGL, DRAW_BUFFER0_WEBGL, DRAW_BUFFER1_WEBGL, DRAW_BUFFER2_WEBGL, DRAW_BUFFER3_WEBGL, DRAW_BUFFER4_WEBGL, DRAW_BUFFER5_WEBGL, DRAW_BUFFER6_WEBGL, DRAW_BUFFER7_WEBGL, DRAW_BUFFER8_WEBGL, DRAW_BUFFER9_WEBGL, DRAW_BUFFER10_WEBGL, DRAW_BUFFER11_WEBGL, DRAW_BUFFER12_WEBGL, DRAW_BUFFER13_WEBGL, DRAW_BUFFER14_WEBGL, DRAW_BUFFER15_WEBGL, MAX_COLOR_ATTACHMENTS_WEBGL, MAX_DRAW_BUFFERS_WEBGL, VERTEX_ARRAY_BINDING_OES, QUERY_COUNTER_BITS_EXT, CURRENT_QUERY_EXT, QUERY_RESULT_EXT, QUERY_RESULT_AVAILABLE_EXT, TIME_ELAPSED_EXT, TIMESTAMP_EXT, GPU_DISJOINT_EXT };

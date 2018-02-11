(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.Tubu = {})));
}(this, (function (exports) { 'use strict';

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants
 *
 */

// Standard WebGL 1 constants

// Clearing buffers

var DEPTH_BUFFER_BIT = 0x00000100; //Passed to clear to clear the current depth buffer.
var STENCIL_BUFFER_BIT = 0x00000400; //Passed to clear to clear the current stencil buffer.
var COLOR_BUFFER_BIT = 0x00004000; //Passed to clear to clear the current color buffer.


// Rendering primitives

var POINTS = 0x0000; // Passed to drawElements or drawArrays to draw single points.
var LINES = 0x0001; // Passed to drawElements or drawArrays to draw lines. Each vertex connects to the one after it.
var LINE_LOOP = 0x0002; // Passed to drawElements or drawArrays to draw lines. Each set of two vertices is treated as a separate line segment.
var LINE_STRIP = 0x0003; // Passed to drawElements or drawArrays to draw a connected group of line segments from the first vertex to the last.
var TRIANGLES = 0x0004; // Passed to drawElements or drawArrays to draw triangles. Each set of three vertices creates a separate triangle.
var TRIANGLE_STRIP = 0x0005; // Passed to drawElements or drawArrays to draw a connected group of triangles.
var TRIANGLE_FAN = 0x0006; // Passed to drawElements or drawArrays to draw a connected group of triangles. Each vertex connects to the previous and the first vertex in the fan.


// Blending modes

var ZERO = 0; //Passed to blendFunc or blendFuncSeparate to turn off a component.
var ONE = 1; // Passed to blendFunc or blendFuncSeparate to turn on a component.
var SRC_COLOR = 0x0300; //Passed to blendFunc or blendFuncSeparate to multiply a component by the source elements color.
var ONE_MINUS_SRC_COLOR = 0x0301; //Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the source elements color.
var SRC_ALPHA = 0x0302; //Passed to blendFunc or blendFuncSeparate to multiply a component by the source's alpha.
var ONE_MINUS_SRC_ALPHA = 0x0303; //Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the source's alpha.
var DST_ALPHA = 0x0304; // Passed to blendFunc or blendFuncSeparate to multiply a component by the destination's alpha.
var ONE_MINUS_DST_ALPHA = 0x0305; //Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the destination's alpha.
var DST_COLOR = 0x0306; //Passed to blendFunc or blendFuncSeparate to multiply a component by the destination's color.
var ONE_MINUS_DST_COLOR = 0x0307; //Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the destination's color.
var SRC_ALPHA_SATURATE = 0x0308; //Passed to blendFunc or blendFuncSeparate to multiply a component by the minimum of source's alpha or one minus the destination's alpha.
var CONSTANT_COLOR = 0x8001; //Passed to blendFunc or blendFuncSeparate to specify a constant color blend function.
var ONE_MINUS_CONSTANT_COLOR = 0x8002; //Passed to blendFunc or blendFuncSeparate to specify one minus a constant color blend function.
var CONSTANT_ALPHA = 0x8003; //Passed to blendFunc or blendFuncSeparate to specify a constant alpha blend function.
var ONE_MINUS_CONSTANT_ALPHA = 0x8004; //Passed to blendFunc or blendFuncSeparate to specify one minus a constant alpha blend function.


// Blending equations

var FUNC_ADD = 0x8006; //Passed to blendEquation or blendEquationSeparate to set an addition blend function.
var FUNC_SUBSTRACT = 0x800A; //Passed to blendEquation or blendEquationSeparate to specify a subtraction blend function (source - destination).
var FUNC_REVERSE_SUBTRACT = 0x800B; //Passed to blendEquation or blendEquationSeparate to specify a reverse subtraction blend function (destination - source).


// Getting GL parameter information

var BLEND_EQUATION = 0x8009; //Passed to getParameter to get the current RGB blend function.
var BLEND_EQUATION_RGB = 0x8009; //Passed to getParameter to get the current RGB blend function. Same as BLEND_EQUATION
var BLEND_EQUATION_ALPHA = 0x883D; //Passed to getParameter to get the current alpha blend function. Same as BLEND_EQUATION
var BLEND_DST_RGB = 0x80C8; //Passed to getParameter to get the current destination RGB blend function.
var BLEND_SRC_RGB = 0x80C9; //Passed to getParameter to get the current destination RGB blend function.
var BLEND_DST_ALPHA = 0x80CA; //Passed to getParameter to get the current destination alpha blend function.
var BLEND_SRC_ALPHA = 0x80CB; //Passed to getParameter to get the current source alpha blend function.
var BLEND_COLOR = 0x8005; //Passed to getParameter to return a the current blend color.
var ARRAY_BUFFER_BINDING = 0x8894; //Passed to getParameter to get the array buffer binding.
var ELEMENT_ARRAY_BUFFER_BINDING = 0x8895; //Passed to getParameter to get the current element array buffer.
var LINE_WIDTH = 0x0B21; //Passed to getParameter to get the current lineWidth (set by the lineWidth method).
var ALIASED_POINT_SIZE_RANGE = 0x846D; //Passed to getParameter to get the current size of a point drawn with gl.POINTS
var ALIASED_LINE_WIDTH_RANGE = 0x846E; //Passed to getParameter to get the range of available widths for a line. Returns a length-2 array with the lo value at 0, and hight at 1.
var CULL_FACE_MODE = 0x0B45; //Passed to getParameter to get the current value of cullFace. Should return FRONT, BACK, or FRONT_AND_BACK
var FRONT_FACE = 0x0B46; //Passed to getParameter to determine the current value of frontFace. Should return CW or CCW.
var DEPTH_RANGE = 0x0B70; //Passed to getParameter to return a length-2 array of floats giving the current depth range.
var DEPTH_WRITEMASK = 0x0B72; //Passed to getParameter to determine if the depth write mask is enabled.
var DEPTH_CLEAR_VALUE = 0x0B73; //Passed to getParameter to determine the current depth clear value.
var DEPTH_FUNC = 0x0B74; //Passed to getParameter to get the current depth function. Returns NEVER, ALWAYS, LESS, EQUAL, LEQUAL, GREATER, GEQUAL, or NOTEQUAL.
var STENCIL_CLEAR_VALUE = 0x0B91; //Passed to getParameter to get the value the stencil will be cleared to.
var STENCIL_FUNC = 0x0B92; //Passed to getParameter to get the current stencil function. Returns NEVER, ALWAYS, LESS, EQUAL, LEQUAL, GREATER, GEQUAL, or NOTEQUAL.
var STENCIL_FAIL = 0x0B94; //Passed to getParameter to get the current stencil fail function. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP.
var STENCIL_PASS_DEPTH_FAIL = 0x0B95; //Passed to getParameter to get the current stencil fail function should the depth buffer test fail. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP.
var STENCIL_PASS_DEPTH_PASS = 0x0B96; //Passed to getParameter to get the current stencil fail function should the depth buffer test pass. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP.
var STENCIL_REF = 0x0B97; //Passed to getParameter to get the reference value used for stencil tests.
var STENCIL_VALUE_MASK = 0x0B93;
var STENCIL_WRITEMASK = 0x0B98;
var STENCIL_BACK_FUNC = 0x8800;
var STENCIL_BACK_FAIL = 0x8801;
var STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802;
var STENCIL_BACK_PASS_DEPTH_PASS = 0x8803;
var STENCIL_BACK_REF = 0x8CA3;
var STENCIL_BACK_VALUE_MASK = 0x8CA4;
var STENCIL_BACK_WRITEMASK = 0x8CA5;
var VIEWPORT = 0x0BA2; //Returns an Int32Array with four elements for the current viewport dimensions.
var SCISSOR_BOX = 0x0C10; //Returns an Int32Array with four elements for the current scissor box dimensions.
var COLOR_CLEAR_VALUE = 0x0C22; //
var COLOR_WRITEMASK = 0x0C23;
var UNPACK_ALIGNMENT = 0x0CF5;
var PACK_ALIGNMENT = 0x0D05;
var MAX_TEXTURE_SIZE = 0x0D33;
var MAX_VIEWPORT_DIMS = 0x0D3A;
var SUBPIXEL_BITS = 0x0D50;
var RED_BITS = 0x0D52;
var GREEN_BITS = 0x0D53;
var BLUE_BITS = 0x0D54;
var ALPHA_BITS = 0x0D55;
var DEPTH_BITS = 0x0D56;
var STENCIL_BITS = 0x0D57;
var POLYGON_OFFSET_UNITS = 0x2A00;
var POLYGON_OFFSET_FACTOR = 0x8038;
var TEXTURE_BINDING_2D = 0x8069;
var SAMPLE_BUFFERS = 0x80A8;
var SAMPLES = 0x80A9;
var SAMPLE_COVERAGE_VALUE = 0x80AA;
var SAMPLE_COVERAGE_INVERT = 0x80AB;
var COMPRESSED_TEXTURE_FORMATS = 0x86A3;
var VENDOR = 0x1F00;
var RENDERER = 0x1F01;
var VERSION = 0x1F02;
var IMPLEMENTATION_COLOR_READ_TYPE = 0x8B9A;
var IMPLEMENTATION_COLOR_READ_FORMAT = 0x8B9B;
var BROWSER_DEFAULT_WEBGL = 0x9244;

// Buffers

var STATIC_DRAW = 0x88E4; //Passed to bufferData as a hint about whether the contents of the buffer are likely to be used often and not change often.
var STREAM_DRAW = 0x88E0; //Passed to bufferData as a hint about whether the contents of the buffer are likely to not be used often.
var DYNAMIC_DRAW = 0x88E8; //Passed to bufferData as a hint about whether the contents of the buffer are likely to be used often and change often.
var ARRAY_BUFFER = 0x8892; //Passed to bindBuffer or bufferData to specify the type of buffer being used.
var ELEMENT_ARRAY_BUFFER = 0x8893; //Passed to bindBuffer or bufferData to specify the type of buffer being used.
var BUFFER_SIZE = 0x8764; //Passed to getBufferParameter to get a buffer's size.
var BUFFER_USAGE = 0x8765; //Passed to getBufferParameter to get the hint for the buffer passed in when it was created.


// Vertex attributes

var CURRENT_VERTEX_ATTRIB = 0x8626; //Passed to getVertexAttrib to read back the current vertex attribute.
var VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622;
var VERTEX_ATTRIB_ARRAY_SIZE = 0x8623;
var VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624;
var VERTEX_ATTRIB_ARRAY_TYPE = 0x8625;
var VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886A;
var VERTEX_ATTRIB_ARRAY_POINTER = 0x8645;
var VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889F;

// Culling

var CULL_FACE = 0x0B44; //Passed to enable/disable to turn on/off culling. Can also be used with getParameter to find the current culling method.
var FRONT = 0x0404; //Passed to cullFace to specify that only front faces should be drawn.
var BACK = 0x0405; //Passed to cullFace to specify that only back faces should be drawn.
var FRONT_AND_BACK = 0x0408; //Passed to cullFace to specify that front and back faces should be drawn.


// Enabling and disabling

var BLEND = 0x0BE2; //	Passed to enable/disable to turn on/off blending. Can also be used with getParameter to find the current blending method.
var DEPTH_TEST = 0x0B71; //Passed to enable/disable to turn on/off the depth test. Can also be used with getParameter to query the depth test.
var DITHER = 0x0BD0; //Passed to enable/disable to turn on/off dithering. Can also be used with getParameter to find the current dithering method.
var POLYGON_OFFSET_FILL = 0x8037; //Passed to enable/disable to turn on/off the polygon offset. Useful for rendering hidden-line images, decals, and or solids with highlighted edges. Can also be used with getParameter to query the scissor test.
var SAMPLE_ALPHA_TO_COVERAGE = 0x809E; //Passed to enable/disable to turn on/off the alpha to coverage. Used in multi-sampling alpha channels.
var SAMPLE_COVERAGE = 0x80A0; //Passed to enable/disable to turn on/off the sample coverage. Used in multi-sampling.
var SCISSOR_TEST = 0x0C11; //Passed to enable/disable to turn on/off the scissor test. Can also be used with getParameter to query the scissor test.
var STENCIL_TEST = 0x0B90; //Passed to enable/disable to turn on/off the stencil test. Can also be used with getParameter to query the stencil test.


// Errors

var NO_ERROR = 0; //Returned from getError.
var INVALID_ENUM = 0x0500; //Returned from getError.
var INVALID_VALUE = 0x0501; //Returned from getError.
var INVALID_OPERATION = 0x0502; //Returned from getError.
var OUT_OF_MEMORY = 0x0505; //Returned from getError.
var CONTEXT_LOST_WEBGL = 0x9242; //Returned from getError.


// Front face directions

var CW = 0x0900; //Passed to frontFace to specify the front face of a polygon is drawn in the clockwise direction
var CCW = 0x0901; //Passed to frontFace to specify the front face of a polygon is drawn in the counter clockwise direction


// Hints

var DONT_CARE = 0x1100; //There is no preference for this behavior.
var FASTEST = 0x1101; //The most efficient behavior should be used.
var NICEST = 0x1102; //The most correct or the highest quality option should be used.
var GENERATE_MIPMAP_HINT = 0x8192; //Hint for the quality of filtering when generating mipmap images with WebGLRenderingContext.generateMipmap().


// Data types

var BYTE = 0x1400;
var UNSIGNED_BYTE = 0x1401;
var SHORT = 0x1402;
var UNSIGNED_SHORT = 0x1403;
var INT = 0x1404;
var UNSIGNED_INT = 0x1405;
var FLOAT = 0x1406;

// Pixel formats

var DEPTH_COMPONENT = 0x1902;
var ALPHA = 0x1906;
var RGB = 0x1907;
var RGBA = 0x1908;
var LUMINANCE = 0x1909;
var LUMINANCE_ALPHA = 0x190A;

// Pixel types

// export const UNSIGNED_BYTE = 0x1401;
var UNSIGNED_SHORT_4_4_4_4 = 0x8033;
var UNSIGNED_SHORT_5_5_5_1 = 0x8034;
var UNSIGNED_SHORT_5_6_5 = 0x8363;

// Shaders

var FRAGMENT_SHADER = 0x8B30; //Passed to createShader to define a fragment shader.
var VERTEX_SHADER = 0x8B31; //Passed to createShader to define a vertex shader
var COMPILE_STATUS = 0x8B81; //Passed to getShaderParamter to get the status of the compilation. Returns false if the shader was not compiled. You can then query getShaderInfoLog to find the exact error
var DELETE_STATUS = 0x8B80; //Passed to getShaderParamter to determine if a shader was deleted via deleteShader. Returns true if it was, false otherwise.
var LINK_STATUS = 0x8B82; //Passed to getProgramParameter after calling linkProgram to determine if a program was linked correctly. Returns false if there were errors. Use getProgramInfoLog to find the exact error.
var VALIDATE_STATUS = 0x8B83; //Passed to getProgramParameter after calling validateProgram to determine if it is valid. Returns false if errors were found.
var ATTACHED_SHADERS = 0x8B85; //Passed to getProgramParameter after calling attachShader to determine if the shader was attached correctly. Returns false if errors occurred.
var ACTIVE_ATTRIBUTES = 0x8B89; //Passed to getProgramParameter to get the number of attributes active in a program.
var ACTIVE_UNIFORMS = 0x8B86; //Passed to getProgramParamter to get the number of uniforms active in a program.
var MAX_VERTEX_ATTRIBS = 0x8869; //The maximum number of entries possible in the vertex attribute list.
var MAX_VERTEX_UNIFORM_VECTORS = 0x8DF; //
var MAX_VARYING_VECTORS = 0x8DF; //
var MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8B4; //
var MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8B4; //
var MAX_TEXTURE_IMAGE_UNITS = 0x8872; //Implementation dependent number of maximum texture units. At least 8.
var MAX_FRAGMENT_UNIFORM_VECTORS = 0x8DF; //
var SHADER_TYPE = 0x8B4; //
var SHADING_LANGUAGE_VERSION = 0x8B8; //
var CURRENT_PROGRAM = 0x8B8D; //


// Depth or stencil tests

var NEVER = 0x0200; //Passed to depthFunction or stencilFunction to specify depth or stencil tests will never pass. i.e. Nothing will be drawn.
var ALWAYS = 0x0207; //Passed to depthFunction or stencilFunction to specify depth or stencil tests will always pass. i.e. Pixels will be drawn in the order they are drawn.
var LESS = 0x0201; //Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than the stored value.
var EQUAL = 0x0202; //Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is equals to the stored value.
var LEQUAL = 0x0203; //Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than or equal to the stored value.
var GREATER = 0x0204; //Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than the stored value.
var GEQUAL = 0x0206; //Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than or equal to the stored value.
var NOTEQUAL = 0x0205; //Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is not equal to the stored value.


// Stencil actions

var KEEP = 0x1E00;
var REPLACE = 0x1E01;
var INCR = 0x1E02;
var DECR = 0x1E03;
var INVERT = 0x150A;
var INCR_WRAP = 0x8507;
var DECR_WRAP = 0x8508;

// Textures

var NEAREST = 0x2600;
var LINEAR = 0x2601;
var NEAREST_MIPMAP_NEAREST = 0x2700;
var LINEAR_MIPMAP_NEAREST = 0x2701;
var NEAREST_MIPMAP_LINEAR = 0x2702;
var LINEAR_MIPMAP_LINEAR = 0x2703;
var TEXTURE_MAG_FILTER = 0x2800;
var TEXTURE_MIN_FILTER = 0x2801;
var TEXTURE_WRAP_S = 0x2802;
var TEXTURE_WRAP_T = 0x2803;
var TEXTURE_2D = 0x0DE1;
var TEXTURE = 0x1702;
var TEXTURE_CUBE_MAP = 0x8513;
var TEXTURE_BINDING_CUBE_MAP = 0x8514;
var TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515;
var TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516;
var TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517;
var TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518;
var TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519;
var TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851A;
var MAX_CUBE_MAP_TEXTURE_SIZE = 0x851C;
var TEXTURE0 = 0x84C0;
// TEXTURE0 - 31	0x84C0 - 0x84DF	A texture unit.
var ACTIVE_TEXTURE = 0x84E0; //The current active texture unit.
var REPEAT = 0x2901;
var CLAMP_TO_EDGE = 0x812F;
var MIRRORED_REPEAT = 0x8370;

// Uniform types

var FLOAT_VEC2 = 0x8B50;
var FLOAT_VEC3 = 0x8B51;
var FLOAT_VEC4 = 0x8B52;
var INT_VEC2 = 0x8B53;
var INT_VEC3 = 0x8B54;
var INT_VEC4 = 0x8B55;
var BOOL = 0x8B56;
var BOOL_VEC2 = 0x8B57;
var BOOL_VEC3 = 0x8B58;
var BOOL_VEC4 = 0x8B59;
var FLOAT_MAT2 = 0x8B5A;
var FLOAT_MAT3 = 0x8B5B;
var FLOAT_MAT4 = 0x8B5C;
var SAMPLER_2D = 0x8B5E;
var SAMPLER_CUBE = 0x8B60;

// Shader precision-specified types

var LOW_FLOAT = 0x8DF0;
var MEDIUM_FLOAT = 0x8DF1;
var HIGH_FLOAT = 0x8DF2;
var LOW_INT = 0x8DF3;
var MEDIUM_INT = 0x8DF4;
var HIGH_INT = 0x8DF5;

// Framebuffers and renderbuffers

var FRAMEBUFFER = 0x8D40;
var RENDERBUFFER = 0x8D41;
var RGBA4 = 0x8056;
var RGB5_A1 = 0x8057;
var RGB565 = 0x8D62;
var DEPTH_COMPONENT16 = 0x81A5;
var STENCIL_INDEX = 0x1901;
var STENCIL_INDEX8 = 0x8D48;
// export const DEPTH_STENCIL = 0x84F9;
var RENDERBUFFER_WIDTH = 0x8D42;
var RENDERBUFFER_HEIGHT = 0x8D43;
var RENDERBUFFER_INTERNAL_FORMAT = 0x8D44;
var RENDERBUFFER_RED_SIZE = 0x8D50;
var RENDERBUFFER_GREEN_SIZE = 0x8D51;
var RENDERBUFFER_BLUE_SIZE = 0x8D52;
var RENDERBUFFER_ALPHA_SIZE = 0x8D53;
var RENDERBUFFER_DEPTH_SIZE = 0x8D54;
var RENDERBUFFER_STENCIL_SIZE = 0x8D55;
var FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8CD0;
var FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8CD1;
var FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8CD2;
var FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8CD3;
var COLOR_ATTACHMENT0 = 0x8CE0;
var DEPTH_ATTACHMENT = 0x8D00;
var STENCIL_ATTACHMENT = 0x8D20;
// export const DEPTH_STENCIL_ATTACHMENT = 0x821A;
var NONE = 0;
var FRAMEBUFFER_COMPLETE = 0x8CD5;
var FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8CD6;
var FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8CD7;
var FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8CD9;
var FRAMEBUFFER_UNSUPPORTED = 0x8CDD;
var FRAMEBUFFER_BINDING = 0x8CA6;
var RENDERBUFFER_BINDING = 0x8CA7;
var MAX_RENDERBUFFER_SIZE = 0x84E8;
var INVALID_FRAMEBUFFER_OPERATION = 0x0506;

// Pixel storage modes

var UNPACK_FLIP_Y_WEBGL = 0x9240;
var UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241;
var UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243;

/**
 * Standard WebGL 2 constants
 */

// Getting GL parameter information

var READ_BUFFER = 0x0C02;
var UNPACK_ROW_LENGTH = 0x0CF2;
var UNPACK_SKIP_ROWS = 0x0CF3;
var UNPACK_SKIP_PIXELS = 0x0CF4;
var PACK_ROW_LENGTH = 0x0D02;
var PACK_SKIP_ROWS = 0x0D03;
var PACK_SKIP_PIXELS = 0x0D04;
var TEXTURE_BINDING_3D = 0x806A;
var UNPACK_SKIP_IMAGES = 0x806D;
var UNPACK_IMAGE_HEIGHT = 0x806E;
var MAX_3D_TEXTURE_SIZE = 0x8073;
var MAX_ELEMENTS_VERTICES = 0x80E8;
var MAX_ELEMENTS_INDICES = 0x80E9;
var MAX_TEXTURE_LOD_BIAS = 0x84FD;
var MAX_FRAGMENT_UNIFORM_COMPONENTS = 0x8B49;
var MAX_VERTEX_UNIFORM_COMPONENTS = 0x8B4A;
var MAX_ARRAY_TEXTURE_LAYERS = 0x88FF;
var MIN_PROGRAM_TEXEL_OFFSET = 0x8904;
var MAX_PROGRAM_TEXEL_OFFSET = 0x8905;
var MAX_VARYING_COMPONENTS = 0x8B4B;
var FRAGMENT_SHADER_DERIVATIVE_HINT = 0x8B8B;
var RASTERIZER_DISCARD = 0x8C89;
var VERTEX_ARRAY_BINDING = 0x85B5;
var MAX_VERTEX_OUTPUT_COMPONENTS = 0x9122;
var MAX_FRAGMENT_INPUT_COMPONENTS = 0x9125;
var MAX_SERVER_WAIT_TIMEOUT = 0x9111;
var MAX_ELEMENT_INDEX = 0x8D6B;

// extures

var RED = 0x1903;
var RGB8 = 0x8051;
var RGBA8 = 0x8058;
var RGB10_A2 = 0x8059;
var TEXTURE_3D = 0x806F;
var TEXTURE_WRAP_R = 0x8072;
var TEXTURE_MIN_LOD = 0x813A;
var TEXTURE_MAX_LOD = 0x813B;
var TEXTURE_BASE_LEVEL = 0x813C;
var TEXTURE_MAX_LEVEL = 0x813D;
var TEXTURE_COMPARE_MODE = 0x884C;
var TEXTURE_COMPARE_FUNC = 0x884D;
var SRGB = 0x8C40;
var SRGB8 = 0x8C41;
var SRGB8_ALPHA8 = 0x8C43;
var COMPARE_REF_TO_TEXTURE = 0x884E;
var RGBA32F = 0x8814;
var RGB32F = 0x8815;
var RGBA16F = 0x881A;
var RGB16F = 0x881B;
var TEXTURE_2D_ARRAY = 0x8C1A;
var TEXTURE_BINDING_2D_ARRAY = 0x8C1D;
var R11F_G11F_B10F = 0x8C3A;
var RGB9_E5 = 0x8C3D;
var RGBA32UI = 0x8D70;
var RGB32UI = 0x8D71;
var RGBA16UI = 0x8D76;
var RGB16UI = 0x8D77;
var RGBA8UI = 0x8D7C;
var RGB8UI = 0x8D7D;
var RGBA32I = 0x8D82;
var RGB32I = 0x8D83;
var RGBA16I = 0x8D88;
var RGB16I = 0x8D89;
var RGBA8I = 0x8D8E;
var RGB8I = 0x8D8F;
var RED_INTEGER = 0x8D94;
var RGB_INTEGER = 0x8D98;
var RGBA_INTEGER = 0x8D99;
var R8 = 0x8229;
var RG8 = 0x822B;
var R16F = 0x822D;
var R32F = 0x822E;
var RG16F = 0x822F;
var RG32F = 0x8230;
var R8I = 0x8231;
var R8UI = 0x8232;
var R16I = 0x8233;
var R16UI = 0x8234;
var R32I = 0x8235;
var R32UI = 0x8236;
var RG8I = 0x8237;
var RG8UI = 0x8238;
var RG16I = 0x8239;
var RG16UI = 0x823A;
var RG32I = 0x823B;
var RG32UI = 0x823C;
var R8_SNORM = 0x8F94;
var RG8_SNORM = 0x8F95;
var RGB8_SNORM = 0x8F96;
var RGBA8_SNORM = 0x8F97;
var RGB10_A2UI = 0x906F;
var TEXTURE_IMMUTABLE_FORMAT = 0x912F;
var TEXTURE_IMMUTABLE_LEVELS = 0x82DF;

// Pixel types

var UNSIGNED_INT_2_10_10_10_REV = 0x8368;
var UNSIGNED_INT_10F_11F_11F_REV = 0x8C3B;
var UNSIGNED_INT_5_9_9_9_REV = 0x8C3E;
var FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8DAD;
var UNSIGNED_INT_24_8 = 0x84FA;
var HALF_FLOAT = 0x140B;
var RG = 0x8227;
var RG_INTEGER = 0x8228;
var INT_2_10_10_10_REV = 0x8D9F;

// Queries

var CURRENT_QUERY = 0x8865;
var QUERY_RESULT = 0x8866;
var QUERY_RESULT_AVAILABLE = 0x8867;
var ANY_SAMPLES_PASSED = 0x8C2F;
var ANY_SAMPLES_PASSED_CONSERVATIVE = 0x8D6A;

// Draw buffers
var MAX_DRAW_BUFFERS = 0x8824;
var DRAW_BUFFER0 = 0x8825;
var DRAW_BUFFER1 = 0x8826;
var DRAW_BUFFER2 = 0x8827;
var DRAW_BUFFER3 = 0x8828;
var DRAW_BUFFER4 = 0x8829;
var DRAW_BUFFER5 = 0x882A;
var DRAW_BUFFER6 = 0x882B;
var DRAW_BUFFER7 = 0x882C;
var DRAW_BUFFER8 = 0x882D;
var DRAW_BUFFER9 = 0x882E;
var DRAW_BUFFER10 = 0x882F;
var DRAW_BUFFER11 = 0x8830;
var DRAW_BUFFER12 = 0x8831;
var DRAW_BUFFER13 = 0x8832;
var DRAW_BUFFER14 = 0x8833;
var DRAW_BUFFER15 = 0x8834;
var MAX_COLOR_ATTACHMENTS = 0x8CDF;
var COLOR_ATTACHMENT1 = 0x8CE1;
var COLOR_ATTACHMENT2 = 0x8CE2;
var COLOR_ATTACHMENT3 = 0x8CE3;
var COLOR_ATTACHMENT4 = 0x8CE4;
var COLOR_ATTACHMENT5 = 0x8CE5;
var COLOR_ATTACHMENT6 = 0x8CE6;
var COLOR_ATTACHMENT7 = 0x8CE7;
var COLOR_ATTACHMENT8 = 0x8CE8;
var COLOR_ATTACHMENT9 = 0x8CE9;
var COLOR_ATTACHMENT10 = 0x8CEA;
var COLOR_ATTACHMENT11 = 0x8CEB;
var COLOR_ATTACHMENT12 = 0x8CEC;
var COLOR_ATTACHMENT13 = 0x8CED;
var COLOR_ATTACHMENT14 = 0x8CEE;
var COLOR_ATTACHMENT15 = 0x8CEF;
var SAMPLER_3D = 0x8B5F;
var SAMPLER_2D_SHADOW = 0x8B62;
var SAMPLER_2D_ARRAY = 0x8DC1;
var SAMPLER_2D_ARRAY_SHADOW = 0x8DC4;
var SAMPLER_CUBE_SHADOW = 0x8DC5;
var INT_SAMPLER_2D = 0x8DCA;
var INT_SAMPLER_3D = 0x8DCB;
var INT_SAMPLER_CUBE = 0x8DCC;
var INT_SAMPLER_2D_ARRAY = 0x8DCF;
var UNSIGNED_INT_SAMPLER_2D = 0x8DD2;
var UNSIGNED_INT_SAMPLER_3D = 0x8DD3;
var UNSIGNED_INT_SAMPLER_CUBE = 0x8DD4;
var UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8DD7;
var MAX_SAMPLES = 0x8D57;
var SAMPLER_BINDING = 0x8919;

// Buffers
// Constant name	Value	Description

var PIXEL_PACK_BUFFER = 0x88EB;
var PIXEL_UNPACK_BUFFER = 0x88EC;
var PIXEL_PACK_BUFFER_BINDING = 0x88ED;
var PIXEL_UNPACK_BUFFER_BINDING = 0x88EF;
var COPY_READ_BUFFER = 0x8F36;
var COPY_WRITE_BUFFER = 0x8F37;
var COPY_READ_BUFFER_BINDING = 0x8F36;
var COPY_WRITE_BUFFER_BINDING = 0x8F37;

// Data types

var FLOAT_MAT2x3 = 0x8B65;
var FLOAT_MAT2x4 = 0x8B66;
var FLOAT_MAT3x2 = 0x8B67;
var FLOAT_MAT3x4 = 0x8B68;
var FLOAT_MAT4x2 = 0x8B69;
var FLOAT_MAT4x3 = 0x8B6A;
var UNSIGNED_INT_VEC2 = 0x8DC6;
var UNSIGNED_INT_VEC3 = 0x8DC7;
var UNSIGNED_INT_VEC4 = 0x8DC8;
var UNSIGNED_NORMALIZED = 0x8C17;
var SIGNED_NORMALIZED = 0x8F9C;

// Vertex attributes

var VERTEX_ATTRIB_ARRAY_INTEGER = 0x88FD;
var VERTEX_ATTRIB_ARRAY_DIVISOR = 0x88FE;

// Transform feedback

var TRANSFORM_FEEDBACK_BUFFER_MODE = 0x8C7F;
var MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = 0x8C80;
var TRANSFORM_FEEDBACK_VARYINGS = 0x8C83;
var TRANSFORM_FEEDBACK_BUFFER_START = 0x8C84;
var TRANSFORM_FEEDBACK_BUFFER_SIZE = 0x8C85;
var TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = 0x8C88;
var MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS = 0x8C8A;
var MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS = 0x8C8B;
var INTERLEAVED_ATTRIBS = 0x8C8C;
var SEPARATE_ATTRIBS = 0x8C8D;
var TRANSFORM_FEEDBACK_BUFFER = 0x8C8E;
var TRANSFORM_FEEDBACK_BUFFER_BINDING = 0x8C8F;
var TRANSFORM_FEEDBACK = 0x8E22;
var TRANSFORM_FEEDBACK_PAUSED = 0x8E23;
var TRANSFORM_FEEDBACK_ACTIVE = 0x8E24;
var TRANSFORM_FEEDBACK_BINDING = 0x8E25;

// Framebuffers and renderbuffers

var FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = 0x8210;
var FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE = 0x8211;
var FRAMEBUFFER_ATTACHMENT_RED_SIZE = 0x8212;
var FRAMEBUFFER_ATTACHMENT_GREEN_SIZE = 0x8213;
var FRAMEBUFFER_ATTACHMENT_BLUE_SIZE = 0x8214;
var FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE = 0x8215;
var FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE = 0x8216;
var FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE = 0x8217;
var FRAMEBUFFER_DEFAULT = 0x8218;
var DEPTH_STENCIL_ATTACHMENT = 0x821A;
var DEPTH_STENCIL = 0x84F9;
var DEPTH24_STENCIL8 = 0x88F0;
var DRAW_FRAMEBUFFER_BINDING = 0x8CA6;
var READ_FRAMEBUFFER = 0x8CA8;
var DRAW_FRAMEBUFFER = 0x8CA9;
var READ_FRAMEBUFFER_BINDING = 0x8CAA;
var RENDERBUFFER_SAMPLES = 0x8CAB;
var FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = 0x8CD4;
var FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = 0x8D56;

// Uniform

var UNIFORM_BUFFER = 0x8A11;
var UNIFORM_BUFFER_BINDING = 0x8A28;
var UNIFORM_BUFFER_START = 0x8A29;
var UNIFORM_BUFFER_SIZE = 0x8A2A;
var MAX_VERTEX_UNIFORM_BLOCKS = 0x8A2B;
var MAX_FRAGMENT_UNIFORM_BLOCKS = 0x8A2D;
var MAX_COMBINED_UNIFORM_BLOCKS = 0x8A2E;
var MAX_UNIFORM_BUFFER_BINDINGS = 0x8A2F;
var MAX_UNIFORM_BLOCK_SIZE = 0x8A30;
var MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = 0x8A31;
var MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = 0x8A33;
var UNIFORM_BUFFER_OFFSET_ALIGNMENT = 0x8A34;
var ACTIVE_UNIFORM_BLOCKS = 0x8A36;
var UNIFORM_TYPE = 0x8A37;
var UNIFORM_SIZE = 0x8A38;
var UNIFORM_BLOCK_INDEX = 0x8A3A;
var UNIFORM_OFFSET = 0x8A3B;
var UNIFORM_ARRAY_STRIDE = 0x8A3C;
var UNIFORM_MATRIX_STRIDE = 0x8A3D;
var UNIFORM_IS_ROW_MAJOR = 0x8A3E;
var UNIFORM_BLOCK_BINDING = 0x8A3F;
var UNIFORM_BLOCK_DATA_SIZE = 0x8A40;
var UNIFORM_BLOCK_ACTIVE_UNIFORMS = 0x8A42;
var UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 0x8A43;
var UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 0x8A44;
var UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 0x8A46;

// Sync objects

var OBJECT_TYPE = 0x9112;
var SYNC_CONDITION = 0x9113;
var SYNC_STATUS = 0x9114;
var SYNC_FLAGS = 0x9115;
var SYNC_FENCE = 0x9116;
var SYNC_GPU_COMMANDS_COMPLETE = 0x9117;
var UNSIGNALED = 0x9118;
var SIGNALED = 0x9119;
var ALREADY_SIGNALED = 0x911A;
var TIMEOUT_EXPIRED = 0x911B;
var CONDITION_SATISFIED = 0x911C;
var WAIT_FAILED = 0x911D;
var SYNC_FLUSH_COMMANDS_BIT = 0x00000001;

// Miscellaneous constants

var COLOR = 0x1800;
var DEPTH = 0x1801;
var STENCIL = 0x1802;
var MIN = 0x8007;
var MAX = 0x8008;
var DEPTH_COMPONENT24 = 0x81A6;
var STREAM_READ = 0x88E1;
var STREAM_COPY = 0x88E2;
var STATIC_READ = 0x88E5;
var STATIC_COPY = 0x88E6;
var DYNAMIC_READ = 0x88E9;
var DYNAMIC_COPY = 0x88EA;
var DEPTH_COMPONENT32F = 0x8CAC;
var DEPTH32F_STENCIL8 = 0x8CAD;
var INVALID_INDEX = 0xFFFFFFFF;
var TIMEOUT_IGNORED = -1;
var MAX_CLIENT_WAIT_TIMEOUT_WEBGL = 0x9247;

/**
* Constants defined in WebGL extensions
*/

// ANGLE_instanced_arrays

var VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE = 0x88FE; //Describes the frequency divisor used for instanced rendering.

// WEBGL_debug_renderer_info

var UNMASKED_VENDOR_WEBGL = 0x9245; //Passed to getParameter to get the vendor string of the graphics driver.
var UNMASKED_RENDERER_WEBGL = 0x9246; //Passed to getParameter to get the renderer string of the graphics driver.

// EXT_texture_filter_anisotropic

var MAX_TEXTURE_MAX_ANISOTROPY_EXT = 0x84FF; //Returns the maximum available anisotropy.
var TEXTURE_MAX_ANISOTROPY_EXT = 0x84FE; //Passed to texParameter to set the desired maximum anisotropy for a texture.

// WEBGL_compressed_texture_s3tc

var COMPRESSED_RGB_S3TC_DXT1_EXT = 0x83F0; //A DXT1-compressed image in an RGB image format.
var COMPRESSED_RGBA_S3TC_DXT1_EXT = 0x83F1; //A DXT1-compressed image in an RGB image format with a simple on/off alpha value.
var COMPRESSED_RGBA_S3TC_DXT3_EXT = 0x83F2; //A DXT3-compressed image in an RGBA image format. Compared to a 32-bit RGBA texture, it offers 4:1 compression.
var COMPRESSED_RGBA_S3TC_DXT5_EXT = 0x83F3; //A DXT5-compressed image in an RGBA image format. It also provides a 4:1 compression, but differs to the DXT3 compression in how the alpha compression is done.

// WEBGL_compressed_texture_etc

var COMPRESSED_R11_EAC = 0x9270; //One-channel (red) unsigned format compression.
var COMPRESSED_SIGNED_R11_EAC = 0x9271; //One-channel (red) signed format compression.
var COMPRESSED_RG11_EAC = 0x9272; //Two-channel (red and green) unsigned format compression.
var COMPRESSED_SIGNED_RG11_EAC = 0x9273; //Two-channel (red and green) signed format compression.
var COMPRESSED_RGB8_ETC2 = 0x9274; //Compresses RBG8 data with no alpha channel.
var COMPRESSED_RGBA8_ETC2_EAC = 0x9275; //Compresses RGBA8 data. The RGB part is encoded the same as RGB_ETC2, but the alpha part is encoded separately.
var COMPRESSED_SRGB8_ETC2 = 0x9276; //Compresses sRBG8 data with no alpha channel.
var COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 0x9277; //Compresses sRGBA8 data. The sRGB part is encoded the same as SRGB_ETC2, but the alpha part is encoded separately.
var COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9278; //Similar to RGB8_ETC, but with ability to punch through the alpha channel, which means to make it completely opaque or transparent.
var COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9279; //Similar to SRGB8_ETC, but with ability to punch through the alpha channel, which means to make it completely opaque or transparent.

// WEBGL_compressed_texture_pvrtc

var COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 0x8C00; // RGB compression in 4-bit mode. One block for each 4×4 pixels.
var COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 0x8C02; // RGBA compression in 4-bit mode. One block for each 4×4 pixels.
var COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 0x8C01; // RGB compression in 2-bit mode. One block for each 8×4 pixels.
var COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 0x8C03; // RGBA compression in 2-bit mode. One block for each 8×4 pixe

// WEBGL_compressed_texture_etc1

var COMPRESSED_RGB_ETC1_WEBGL = 0x8D64; // Compresses 24-bit RGB data with no alpha channel.

// WEBGL_compressed_texture_atc

var COMPRESSED_RGB_ATC_WEBGL = 0x8C92; // Compresses RGB textures with no alpha channel.
var COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 0x8C92; // Compresses RGBA textures using explicit alpha encoding (useful when alpha transitions are sharp).
var COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 0x87EE; // Compresses RGBA textures using interpolated alpha encoding (useful when alpha transitions are gradient).

// WEBGL_depth_texture

var UNSIGNED_INT_24_8_WEBGL = 0x84FA; // Unsigned integer type for 24-bit depth texture data.

// OES_texture_half_float

var HALF_FLOAT_OES = 0x8D61; // Half floating-point type (16-bit).

// WEBGL_color_buffer_float

var RGBA32F_EXT = 0x8814; // RGBA 32-bit floating-point color-renderable format.
var RGB32F_EXT = 0x8815; // RGB 32-bit floating-point color-renderable format.
var FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT = 0x821; //
var UNSIGNED_NORMALIZED_EXT = 0x8C1; //

// EXT_blend_minmax

var MIN_EXT = 0x8007; // Produces the minimum color components of the source and destination colors.
var MAX_EXT = 0x8008; // Produces the maximum color components of the source and destination colors.

// EXT_sRGB

var SRGB_EXT = 0x8C40; // Unsized sRGB format that leaves the precision up to the driver.
var SRGB_ALPHA_EXT = 0x8C42; // Unsized sRGB format with unsized alpha component.
var SRGB8_ALPHA8_EXT = 0x8C43; // Sized (8-bit) sRGB and alpha formats.
var FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT = 0x8210; // Returns the framebuffer color encoding.

// OES_standard_derivatives

var FRAGMENT_SHADER_DERIVATIVE_HINT_OES = 0x8B8B; // Indicates the accuracy of the derivative calculation for the GLSL built-in functions: dFdx, dFdy, and fwidth.

// WEBGL_draw_buffers

var COLOR_ATTACHMENT0_WEBGL = 0x8CE0; // Framebuffer color attachment point
var COLOR_ATTACHMENT1_WEBGL = 0x8CE1; // Framebuffer color attachment point
var COLOR_ATTACHMENT2_WEBGL = 0x8CE2; // Framebuffer color attachment point
var COLOR_ATTACHMENT3_WEBGL = 0x8CE3; // Framebuffer color attachment point
var COLOR_ATTACHMENT4_WEBGL = 0x8CE4; // Framebuffer color attachment point
var COLOR_ATTACHMENT5_WEBGL = 0x8CE5; // Framebuffer color attachment point
var COLOR_ATTACHMENT6_WEBGL = 0x8CE6; // Framebuffer color attachment point
var COLOR_ATTACHMENT7_WEBGL = 0x8CE7; // Framebuffer color attachment point
var COLOR_ATTACHMENT8_WEBGL = 0x8CE8; // Framebuffer color attachment point
var COLOR_ATTACHMENT9_WEBGL = 0x8CE9; // Framebuffer color attachment point
var COLOR_ATTACHMENT10_WEBGL = 0x8CEA; // Framebuffer color attachment point
var COLOR_ATTACHMENT11_WEBGL = 0x8CEB; // Framebuffer color attachment point
var COLOR_ATTACHMENT12_WEBGL = 0x8CEC; // Framebuffer color attachment point
var COLOR_ATTACHMENT13_WEBGL = 0x8CED; // Framebuffer color attachment point
var COLOR_ATTACHMENT14_WEBGL = 0x8CEE; // Framebuffer color attachment point
var COLOR_ATTACHMENT15_WEBGL = 0x8CEF; // Framebuffer color attachment point
var DRAW_BUFFER0_WEBGL = 0x8825; // Draw buffer
var DRAW_BUFFER1_WEBGL = 0x8826; // Draw buffer
var DRAW_BUFFER2_WEBGL = 0x8827; // Draw buffer
var DRAW_BUFFER3_WEBGL = 0x8828; // Draw buffer
var DRAW_BUFFER4_WEBGL = 0x8829; // Draw buffer
var DRAW_BUFFER5_WEBGL = 0x882A; // Draw buffer
var DRAW_BUFFER6_WEBGL = 0x882B; // Draw buffer
var DRAW_BUFFER7_WEBGL = 0x882C; // Draw buffer
var DRAW_BUFFER8_WEBGL = 0x882D; // Draw buffer
var DRAW_BUFFER9_WEBGL = 0x882E; // Draw buffer
var DRAW_BUFFER10_WEBGL = 0x882F; // Draw buffer
var DRAW_BUFFER11_WEBGL = 0x8830; // Draw buffer
var DRAW_BUFFER12_WEBGL = 0x8831; // Draw buffer
var DRAW_BUFFER13_WEBGL = 0x8832; // Draw buffer
var DRAW_BUFFER14_WEBGL = 0x8833; // Draw buffer
var DRAW_BUFFER15_WEBGL = 0x8834; // Draw buffer
var MAX_COLOR_ATTACHMENTS_WEBGL = 0x8CDF; // Maximum number of framebuffer color attachment points
var MAX_DRAW_BUFFERS_WEBGL = 0x8824; // Maximum number of draw buffers

// OES_vertex_array_object

var VERTEX_ARRAY_BINDING_OES = 0x85B5; // The bound vertex array object (VAO).

// EXT_disjoint_timer_query

var QUERY_COUNTER_BITS_EXT = 0x8864; // The number of bits used to hold the query result for the given target.
var CURRENT_QUERY_EXT = 0x8865; // The currently active query.
var QUERY_RESULT_EXT = 0x8866; // The query result.
var QUERY_RESULT_AVAILABLE_EXT = 0x8867; // A Boolean indicating whether or not a query result is available.
var TIME_ELAPSED_EXT = 0x88BF; // Elapsed time (in nanoseconds).
var TIMESTAMP_EXT = 0x8E28; // The current time.
var GPU_DISJOINT_EXT = 0x8FBB; // A Boolean indicating whether or not the GPU performed any disjoint operation.

exports.DEPTH_BUFFER_BIT = DEPTH_BUFFER_BIT;
exports.STENCIL_BUFFER_BIT = STENCIL_BUFFER_BIT;
exports.COLOR_BUFFER_BIT = COLOR_BUFFER_BIT;
exports.POINTS = POINTS;
exports.LINES = LINES;
exports.LINE_LOOP = LINE_LOOP;
exports.LINE_STRIP = LINE_STRIP;
exports.TRIANGLES = TRIANGLES;
exports.TRIANGLE_STRIP = TRIANGLE_STRIP;
exports.TRIANGLE_FAN = TRIANGLE_FAN;
exports.ZERO = ZERO;
exports.ONE = ONE;
exports.SRC_COLOR = SRC_COLOR;
exports.ONE_MINUS_SRC_COLOR = ONE_MINUS_SRC_COLOR;
exports.SRC_ALPHA = SRC_ALPHA;
exports.ONE_MINUS_SRC_ALPHA = ONE_MINUS_SRC_ALPHA;
exports.DST_ALPHA = DST_ALPHA;
exports.ONE_MINUS_DST_ALPHA = ONE_MINUS_DST_ALPHA;
exports.DST_COLOR = DST_COLOR;
exports.ONE_MINUS_DST_COLOR = ONE_MINUS_DST_COLOR;
exports.SRC_ALPHA_SATURATE = SRC_ALPHA_SATURATE;
exports.CONSTANT_COLOR = CONSTANT_COLOR;
exports.ONE_MINUS_CONSTANT_COLOR = ONE_MINUS_CONSTANT_COLOR;
exports.CONSTANT_ALPHA = CONSTANT_ALPHA;
exports.ONE_MINUS_CONSTANT_ALPHA = ONE_MINUS_CONSTANT_ALPHA;
exports.FUNC_ADD = FUNC_ADD;
exports.FUNC_SUBSTRACT = FUNC_SUBSTRACT;
exports.FUNC_REVERSE_SUBTRACT = FUNC_REVERSE_SUBTRACT;
exports.BLEND_EQUATION = BLEND_EQUATION;
exports.BLEND_EQUATION_RGB = BLEND_EQUATION_RGB;
exports.BLEND_EQUATION_ALPHA = BLEND_EQUATION_ALPHA;
exports.BLEND_DST_RGB = BLEND_DST_RGB;
exports.BLEND_SRC_RGB = BLEND_SRC_RGB;
exports.BLEND_DST_ALPHA = BLEND_DST_ALPHA;
exports.BLEND_SRC_ALPHA = BLEND_SRC_ALPHA;
exports.BLEND_COLOR = BLEND_COLOR;
exports.ARRAY_BUFFER_BINDING = ARRAY_BUFFER_BINDING;
exports.ELEMENT_ARRAY_BUFFER_BINDING = ELEMENT_ARRAY_BUFFER_BINDING;
exports.LINE_WIDTH = LINE_WIDTH;
exports.ALIASED_POINT_SIZE_RANGE = ALIASED_POINT_SIZE_RANGE;
exports.ALIASED_LINE_WIDTH_RANGE = ALIASED_LINE_WIDTH_RANGE;
exports.CULL_FACE_MODE = CULL_FACE_MODE;
exports.FRONT_FACE = FRONT_FACE;
exports.DEPTH_RANGE = DEPTH_RANGE;
exports.DEPTH_WRITEMASK = DEPTH_WRITEMASK;
exports.DEPTH_CLEAR_VALUE = DEPTH_CLEAR_VALUE;
exports.DEPTH_FUNC = DEPTH_FUNC;
exports.STENCIL_CLEAR_VALUE = STENCIL_CLEAR_VALUE;
exports.STENCIL_FUNC = STENCIL_FUNC;
exports.STENCIL_FAIL = STENCIL_FAIL;
exports.STENCIL_PASS_DEPTH_FAIL = STENCIL_PASS_DEPTH_FAIL;
exports.STENCIL_PASS_DEPTH_PASS = STENCIL_PASS_DEPTH_PASS;
exports.STENCIL_REF = STENCIL_REF;
exports.STENCIL_VALUE_MASK = STENCIL_VALUE_MASK;
exports.STENCIL_WRITEMASK = STENCIL_WRITEMASK;
exports.STENCIL_BACK_FUNC = STENCIL_BACK_FUNC;
exports.STENCIL_BACK_FAIL = STENCIL_BACK_FAIL;
exports.STENCIL_BACK_PASS_DEPTH_FAIL = STENCIL_BACK_PASS_DEPTH_FAIL;
exports.STENCIL_BACK_PASS_DEPTH_PASS = STENCIL_BACK_PASS_DEPTH_PASS;
exports.STENCIL_BACK_REF = STENCIL_BACK_REF;
exports.STENCIL_BACK_VALUE_MASK = STENCIL_BACK_VALUE_MASK;
exports.STENCIL_BACK_WRITEMASK = STENCIL_BACK_WRITEMASK;
exports.VIEWPORT = VIEWPORT;
exports.SCISSOR_BOX = SCISSOR_BOX;
exports.COLOR_CLEAR_VALUE = COLOR_CLEAR_VALUE;
exports.COLOR_WRITEMASK = COLOR_WRITEMASK;
exports.UNPACK_ALIGNMENT = UNPACK_ALIGNMENT;
exports.PACK_ALIGNMENT = PACK_ALIGNMENT;
exports.MAX_TEXTURE_SIZE = MAX_TEXTURE_SIZE;
exports.MAX_VIEWPORT_DIMS = MAX_VIEWPORT_DIMS;
exports.SUBPIXEL_BITS = SUBPIXEL_BITS;
exports.RED_BITS = RED_BITS;
exports.GREEN_BITS = GREEN_BITS;
exports.BLUE_BITS = BLUE_BITS;
exports.ALPHA_BITS = ALPHA_BITS;
exports.DEPTH_BITS = DEPTH_BITS;
exports.STENCIL_BITS = STENCIL_BITS;
exports.POLYGON_OFFSET_UNITS = POLYGON_OFFSET_UNITS;
exports.POLYGON_OFFSET_FACTOR = POLYGON_OFFSET_FACTOR;
exports.TEXTURE_BINDING_2D = TEXTURE_BINDING_2D;
exports.SAMPLE_BUFFERS = SAMPLE_BUFFERS;
exports.SAMPLES = SAMPLES;
exports.SAMPLE_COVERAGE_VALUE = SAMPLE_COVERAGE_VALUE;
exports.SAMPLE_COVERAGE_INVERT = SAMPLE_COVERAGE_INVERT;
exports.COMPRESSED_TEXTURE_FORMATS = COMPRESSED_TEXTURE_FORMATS;
exports.VENDOR = VENDOR;
exports.RENDERER = RENDERER;
exports.VERSION = VERSION;
exports.IMPLEMENTATION_COLOR_READ_TYPE = IMPLEMENTATION_COLOR_READ_TYPE;
exports.IMPLEMENTATION_COLOR_READ_FORMAT = IMPLEMENTATION_COLOR_READ_FORMAT;
exports.BROWSER_DEFAULT_WEBGL = BROWSER_DEFAULT_WEBGL;
exports.STATIC_DRAW = STATIC_DRAW;
exports.STREAM_DRAW = STREAM_DRAW;
exports.DYNAMIC_DRAW = DYNAMIC_DRAW;
exports.ARRAY_BUFFER = ARRAY_BUFFER;
exports.ELEMENT_ARRAY_BUFFER = ELEMENT_ARRAY_BUFFER;
exports.BUFFER_SIZE = BUFFER_SIZE;
exports.BUFFER_USAGE = BUFFER_USAGE;
exports.CURRENT_VERTEX_ATTRIB = CURRENT_VERTEX_ATTRIB;
exports.VERTEX_ATTRIB_ARRAY_ENABLED = VERTEX_ATTRIB_ARRAY_ENABLED;
exports.VERTEX_ATTRIB_ARRAY_SIZE = VERTEX_ATTRIB_ARRAY_SIZE;
exports.VERTEX_ATTRIB_ARRAY_STRIDE = VERTEX_ATTRIB_ARRAY_STRIDE;
exports.VERTEX_ATTRIB_ARRAY_TYPE = VERTEX_ATTRIB_ARRAY_TYPE;
exports.VERTEX_ATTRIB_ARRAY_NORMALIZED = VERTEX_ATTRIB_ARRAY_NORMALIZED;
exports.VERTEX_ATTRIB_ARRAY_POINTER = VERTEX_ATTRIB_ARRAY_POINTER;
exports.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = VERTEX_ATTRIB_ARRAY_BUFFER_BINDING;
exports.CULL_FACE = CULL_FACE;
exports.FRONT = FRONT;
exports.BACK = BACK;
exports.FRONT_AND_BACK = FRONT_AND_BACK;
exports.BLEND = BLEND;
exports.DEPTH_TEST = DEPTH_TEST;
exports.DITHER = DITHER;
exports.POLYGON_OFFSET_FILL = POLYGON_OFFSET_FILL;
exports.SAMPLE_ALPHA_TO_COVERAGE = SAMPLE_ALPHA_TO_COVERAGE;
exports.SAMPLE_COVERAGE = SAMPLE_COVERAGE;
exports.SCISSOR_TEST = SCISSOR_TEST;
exports.STENCIL_TEST = STENCIL_TEST;
exports.NO_ERROR = NO_ERROR;
exports.INVALID_ENUM = INVALID_ENUM;
exports.INVALID_VALUE = INVALID_VALUE;
exports.INVALID_OPERATION = INVALID_OPERATION;
exports.OUT_OF_MEMORY = OUT_OF_MEMORY;
exports.CONTEXT_LOST_WEBGL = CONTEXT_LOST_WEBGL;
exports.CW = CW;
exports.CCW = CCW;
exports.DONT_CARE = DONT_CARE;
exports.FASTEST = FASTEST;
exports.NICEST = NICEST;
exports.GENERATE_MIPMAP_HINT = GENERATE_MIPMAP_HINT;
exports.BYTE = BYTE;
exports.UNSIGNED_BYTE = UNSIGNED_BYTE;
exports.SHORT = SHORT;
exports.UNSIGNED_SHORT = UNSIGNED_SHORT;
exports.INT = INT;
exports.UNSIGNED_INT = UNSIGNED_INT;
exports.FLOAT = FLOAT;
exports.DEPTH_COMPONENT = DEPTH_COMPONENT;
exports.ALPHA = ALPHA;
exports.RGB = RGB;
exports.RGBA = RGBA;
exports.LUMINANCE = LUMINANCE;
exports.LUMINANCE_ALPHA = LUMINANCE_ALPHA;
exports.UNSIGNED_SHORT_4_4_4_4 = UNSIGNED_SHORT_4_4_4_4;
exports.UNSIGNED_SHORT_5_5_5_1 = UNSIGNED_SHORT_5_5_5_1;
exports.UNSIGNED_SHORT_5_6_5 = UNSIGNED_SHORT_5_6_5;
exports.FRAGMENT_SHADER = FRAGMENT_SHADER;
exports.VERTEX_SHADER = VERTEX_SHADER;
exports.COMPILE_STATUS = COMPILE_STATUS;
exports.DELETE_STATUS = DELETE_STATUS;
exports.LINK_STATUS = LINK_STATUS;
exports.VALIDATE_STATUS = VALIDATE_STATUS;
exports.ATTACHED_SHADERS = ATTACHED_SHADERS;
exports.ACTIVE_ATTRIBUTES = ACTIVE_ATTRIBUTES;
exports.ACTIVE_UNIFORMS = ACTIVE_UNIFORMS;
exports.MAX_VERTEX_ATTRIBS = MAX_VERTEX_ATTRIBS;
exports.MAX_VERTEX_UNIFORM_VECTORS = MAX_VERTEX_UNIFORM_VECTORS;
exports.MAX_VARYING_VECTORS = MAX_VARYING_VECTORS;
exports.MAX_COMBINED_TEXTURE_IMAGE_UNITS = MAX_COMBINED_TEXTURE_IMAGE_UNITS;
exports.MAX_VERTEX_TEXTURE_IMAGE_UNITS = MAX_VERTEX_TEXTURE_IMAGE_UNITS;
exports.MAX_TEXTURE_IMAGE_UNITS = MAX_TEXTURE_IMAGE_UNITS;
exports.MAX_FRAGMENT_UNIFORM_VECTORS = MAX_FRAGMENT_UNIFORM_VECTORS;
exports.SHADER_TYPE = SHADER_TYPE;
exports.SHADING_LANGUAGE_VERSION = SHADING_LANGUAGE_VERSION;
exports.CURRENT_PROGRAM = CURRENT_PROGRAM;
exports.NEVER = NEVER;
exports.ALWAYS = ALWAYS;
exports.LESS = LESS;
exports.EQUAL = EQUAL;
exports.LEQUAL = LEQUAL;
exports.GREATER = GREATER;
exports.GEQUAL = GEQUAL;
exports.NOTEQUAL = NOTEQUAL;
exports.KEEP = KEEP;
exports.REPLACE = REPLACE;
exports.INCR = INCR;
exports.DECR = DECR;
exports.INVERT = INVERT;
exports.INCR_WRAP = INCR_WRAP;
exports.DECR_WRAP = DECR_WRAP;
exports.NEAREST = NEAREST;
exports.LINEAR = LINEAR;
exports.NEAREST_MIPMAP_NEAREST = NEAREST_MIPMAP_NEAREST;
exports.LINEAR_MIPMAP_NEAREST = LINEAR_MIPMAP_NEAREST;
exports.NEAREST_MIPMAP_LINEAR = NEAREST_MIPMAP_LINEAR;
exports.LINEAR_MIPMAP_LINEAR = LINEAR_MIPMAP_LINEAR;
exports.TEXTURE_MAG_FILTER = TEXTURE_MAG_FILTER;
exports.TEXTURE_MIN_FILTER = TEXTURE_MIN_FILTER;
exports.TEXTURE_WRAP_S = TEXTURE_WRAP_S;
exports.TEXTURE_WRAP_T = TEXTURE_WRAP_T;
exports.TEXTURE_2D = TEXTURE_2D;
exports.TEXTURE = TEXTURE;
exports.TEXTURE_CUBE_MAP = TEXTURE_CUBE_MAP;
exports.TEXTURE_BINDING_CUBE_MAP = TEXTURE_BINDING_CUBE_MAP;
exports.TEXTURE_CUBE_MAP_POSITIVE_X = TEXTURE_CUBE_MAP_POSITIVE_X;
exports.TEXTURE_CUBE_MAP_NEGATIVE_X = TEXTURE_CUBE_MAP_NEGATIVE_X;
exports.TEXTURE_CUBE_MAP_POSITIVE_Y = TEXTURE_CUBE_MAP_POSITIVE_Y;
exports.TEXTURE_CUBE_MAP_NEGATIVE_Y = TEXTURE_CUBE_MAP_NEGATIVE_Y;
exports.TEXTURE_CUBE_MAP_POSITIVE_Z = TEXTURE_CUBE_MAP_POSITIVE_Z;
exports.TEXTURE_CUBE_MAP_NEGATIVE_Z = TEXTURE_CUBE_MAP_NEGATIVE_Z;
exports.MAX_CUBE_MAP_TEXTURE_SIZE = MAX_CUBE_MAP_TEXTURE_SIZE;
exports.TEXTURE0 = TEXTURE0;
exports.ACTIVE_TEXTURE = ACTIVE_TEXTURE;
exports.REPEAT = REPEAT;
exports.CLAMP_TO_EDGE = CLAMP_TO_EDGE;
exports.MIRRORED_REPEAT = MIRRORED_REPEAT;
exports.FLOAT_VEC2 = FLOAT_VEC2;
exports.FLOAT_VEC3 = FLOAT_VEC3;
exports.FLOAT_VEC4 = FLOAT_VEC4;
exports.INT_VEC2 = INT_VEC2;
exports.INT_VEC3 = INT_VEC3;
exports.INT_VEC4 = INT_VEC4;
exports.BOOL = BOOL;
exports.BOOL_VEC2 = BOOL_VEC2;
exports.BOOL_VEC3 = BOOL_VEC3;
exports.BOOL_VEC4 = BOOL_VEC4;
exports.FLOAT_MAT2 = FLOAT_MAT2;
exports.FLOAT_MAT3 = FLOAT_MAT3;
exports.FLOAT_MAT4 = FLOAT_MAT4;
exports.SAMPLER_2D = SAMPLER_2D;
exports.SAMPLER_CUBE = SAMPLER_CUBE;
exports.LOW_FLOAT = LOW_FLOAT;
exports.MEDIUM_FLOAT = MEDIUM_FLOAT;
exports.HIGH_FLOAT = HIGH_FLOAT;
exports.LOW_INT = LOW_INT;
exports.MEDIUM_INT = MEDIUM_INT;
exports.HIGH_INT = HIGH_INT;
exports.FRAMEBUFFER = FRAMEBUFFER;
exports.RENDERBUFFER = RENDERBUFFER;
exports.RGBA4 = RGBA4;
exports.RGB5_A1 = RGB5_A1;
exports.RGB565 = RGB565;
exports.DEPTH_COMPONENT16 = DEPTH_COMPONENT16;
exports.STENCIL_INDEX = STENCIL_INDEX;
exports.STENCIL_INDEX8 = STENCIL_INDEX8;
exports.RENDERBUFFER_WIDTH = RENDERBUFFER_WIDTH;
exports.RENDERBUFFER_HEIGHT = RENDERBUFFER_HEIGHT;
exports.RENDERBUFFER_INTERNAL_FORMAT = RENDERBUFFER_INTERNAL_FORMAT;
exports.RENDERBUFFER_RED_SIZE = RENDERBUFFER_RED_SIZE;
exports.RENDERBUFFER_GREEN_SIZE = RENDERBUFFER_GREEN_SIZE;
exports.RENDERBUFFER_BLUE_SIZE = RENDERBUFFER_BLUE_SIZE;
exports.RENDERBUFFER_ALPHA_SIZE = RENDERBUFFER_ALPHA_SIZE;
exports.RENDERBUFFER_DEPTH_SIZE = RENDERBUFFER_DEPTH_SIZE;
exports.RENDERBUFFER_STENCIL_SIZE = RENDERBUFFER_STENCIL_SIZE;
exports.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE;
exports.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = FRAMEBUFFER_ATTACHMENT_OBJECT_NAME;
exports.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL;
exports.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE;
exports.COLOR_ATTACHMENT0 = COLOR_ATTACHMENT0;
exports.DEPTH_ATTACHMENT = DEPTH_ATTACHMENT;
exports.STENCIL_ATTACHMENT = STENCIL_ATTACHMENT;
exports.NONE = NONE;
exports.FRAMEBUFFER_COMPLETE = FRAMEBUFFER_COMPLETE;
exports.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = FRAMEBUFFER_INCOMPLETE_ATTACHMENT;
exports.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT;
exports.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = FRAMEBUFFER_INCOMPLETE_DIMENSIONS;
exports.FRAMEBUFFER_UNSUPPORTED = FRAMEBUFFER_UNSUPPORTED;
exports.FRAMEBUFFER_BINDING = FRAMEBUFFER_BINDING;
exports.RENDERBUFFER_BINDING = RENDERBUFFER_BINDING;
exports.MAX_RENDERBUFFER_SIZE = MAX_RENDERBUFFER_SIZE;
exports.INVALID_FRAMEBUFFER_OPERATION = INVALID_FRAMEBUFFER_OPERATION;
exports.UNPACK_FLIP_Y_WEBGL = UNPACK_FLIP_Y_WEBGL;
exports.UNPACK_PREMULTIPLY_ALPHA_WEBGL = UNPACK_PREMULTIPLY_ALPHA_WEBGL;
exports.UNPACK_COLORSPACE_CONVERSION_WEBGL = UNPACK_COLORSPACE_CONVERSION_WEBGL;
exports.READ_BUFFER = READ_BUFFER;
exports.UNPACK_ROW_LENGTH = UNPACK_ROW_LENGTH;
exports.UNPACK_SKIP_ROWS = UNPACK_SKIP_ROWS;
exports.UNPACK_SKIP_PIXELS = UNPACK_SKIP_PIXELS;
exports.PACK_ROW_LENGTH = PACK_ROW_LENGTH;
exports.PACK_SKIP_ROWS = PACK_SKIP_ROWS;
exports.PACK_SKIP_PIXELS = PACK_SKIP_PIXELS;
exports.TEXTURE_BINDING_3D = TEXTURE_BINDING_3D;
exports.UNPACK_SKIP_IMAGES = UNPACK_SKIP_IMAGES;
exports.UNPACK_IMAGE_HEIGHT = UNPACK_IMAGE_HEIGHT;
exports.MAX_3D_TEXTURE_SIZE = MAX_3D_TEXTURE_SIZE;
exports.MAX_ELEMENTS_VERTICES = MAX_ELEMENTS_VERTICES;
exports.MAX_ELEMENTS_INDICES = MAX_ELEMENTS_INDICES;
exports.MAX_TEXTURE_LOD_BIAS = MAX_TEXTURE_LOD_BIAS;
exports.MAX_FRAGMENT_UNIFORM_COMPONENTS = MAX_FRAGMENT_UNIFORM_COMPONENTS;
exports.MAX_VERTEX_UNIFORM_COMPONENTS = MAX_VERTEX_UNIFORM_COMPONENTS;
exports.MAX_ARRAY_TEXTURE_LAYERS = MAX_ARRAY_TEXTURE_LAYERS;
exports.MIN_PROGRAM_TEXEL_OFFSET = MIN_PROGRAM_TEXEL_OFFSET;
exports.MAX_PROGRAM_TEXEL_OFFSET = MAX_PROGRAM_TEXEL_OFFSET;
exports.MAX_VARYING_COMPONENTS = MAX_VARYING_COMPONENTS;
exports.FRAGMENT_SHADER_DERIVATIVE_HINT = FRAGMENT_SHADER_DERIVATIVE_HINT;
exports.RASTERIZER_DISCARD = RASTERIZER_DISCARD;
exports.VERTEX_ARRAY_BINDING = VERTEX_ARRAY_BINDING;
exports.MAX_VERTEX_OUTPUT_COMPONENTS = MAX_VERTEX_OUTPUT_COMPONENTS;
exports.MAX_FRAGMENT_INPUT_COMPONENTS = MAX_FRAGMENT_INPUT_COMPONENTS;
exports.MAX_SERVER_WAIT_TIMEOUT = MAX_SERVER_WAIT_TIMEOUT;
exports.MAX_ELEMENT_INDEX = MAX_ELEMENT_INDEX;
exports.RED = RED;
exports.RGB8 = RGB8;
exports.RGBA8 = RGBA8;
exports.RGB10_A2 = RGB10_A2;
exports.TEXTURE_3D = TEXTURE_3D;
exports.TEXTURE_WRAP_R = TEXTURE_WRAP_R;
exports.TEXTURE_MIN_LOD = TEXTURE_MIN_LOD;
exports.TEXTURE_MAX_LOD = TEXTURE_MAX_LOD;
exports.TEXTURE_BASE_LEVEL = TEXTURE_BASE_LEVEL;
exports.TEXTURE_MAX_LEVEL = TEXTURE_MAX_LEVEL;
exports.TEXTURE_COMPARE_MODE = TEXTURE_COMPARE_MODE;
exports.TEXTURE_COMPARE_FUNC = TEXTURE_COMPARE_FUNC;
exports.SRGB = SRGB;
exports.SRGB8 = SRGB8;
exports.SRGB8_ALPHA8 = SRGB8_ALPHA8;
exports.COMPARE_REF_TO_TEXTURE = COMPARE_REF_TO_TEXTURE;
exports.RGBA32F = RGBA32F;
exports.RGB32F = RGB32F;
exports.RGBA16F = RGBA16F;
exports.RGB16F = RGB16F;
exports.TEXTURE_2D_ARRAY = TEXTURE_2D_ARRAY;
exports.TEXTURE_BINDING_2D_ARRAY = TEXTURE_BINDING_2D_ARRAY;
exports.R11F_G11F_B10F = R11F_G11F_B10F;
exports.RGB9_E5 = RGB9_E5;
exports.RGBA32UI = RGBA32UI;
exports.RGB32UI = RGB32UI;
exports.RGBA16UI = RGBA16UI;
exports.RGB16UI = RGB16UI;
exports.RGBA8UI = RGBA8UI;
exports.RGB8UI = RGB8UI;
exports.RGBA32I = RGBA32I;
exports.RGB32I = RGB32I;
exports.RGBA16I = RGBA16I;
exports.RGB16I = RGB16I;
exports.RGBA8I = RGBA8I;
exports.RGB8I = RGB8I;
exports.RED_INTEGER = RED_INTEGER;
exports.RGB_INTEGER = RGB_INTEGER;
exports.RGBA_INTEGER = RGBA_INTEGER;
exports.R8 = R8;
exports.RG8 = RG8;
exports.R16F = R16F;
exports.R32F = R32F;
exports.RG16F = RG16F;
exports.RG32F = RG32F;
exports.R8I = R8I;
exports.R8UI = R8UI;
exports.R16I = R16I;
exports.R16UI = R16UI;
exports.R32I = R32I;
exports.R32UI = R32UI;
exports.RG8I = RG8I;
exports.RG8UI = RG8UI;
exports.RG16I = RG16I;
exports.RG16UI = RG16UI;
exports.RG32I = RG32I;
exports.RG32UI = RG32UI;
exports.R8_SNORM = R8_SNORM;
exports.RG8_SNORM = RG8_SNORM;
exports.RGB8_SNORM = RGB8_SNORM;
exports.RGBA8_SNORM = RGBA8_SNORM;
exports.RGB10_A2UI = RGB10_A2UI;
exports.TEXTURE_IMMUTABLE_FORMAT = TEXTURE_IMMUTABLE_FORMAT;
exports.TEXTURE_IMMUTABLE_LEVELS = TEXTURE_IMMUTABLE_LEVELS;
exports.UNSIGNED_INT_2_10_10_10_REV = UNSIGNED_INT_2_10_10_10_REV;
exports.UNSIGNED_INT_10F_11F_11F_REV = UNSIGNED_INT_10F_11F_11F_REV;
exports.UNSIGNED_INT_5_9_9_9_REV = UNSIGNED_INT_5_9_9_9_REV;
exports.FLOAT_32_UNSIGNED_INT_24_8_REV = FLOAT_32_UNSIGNED_INT_24_8_REV;
exports.UNSIGNED_INT_24_8 = UNSIGNED_INT_24_8;
exports.HALF_FLOAT = HALF_FLOAT;
exports.RG = RG;
exports.RG_INTEGER = RG_INTEGER;
exports.INT_2_10_10_10_REV = INT_2_10_10_10_REV;
exports.CURRENT_QUERY = CURRENT_QUERY;
exports.QUERY_RESULT = QUERY_RESULT;
exports.QUERY_RESULT_AVAILABLE = QUERY_RESULT_AVAILABLE;
exports.ANY_SAMPLES_PASSED = ANY_SAMPLES_PASSED;
exports.ANY_SAMPLES_PASSED_CONSERVATIVE = ANY_SAMPLES_PASSED_CONSERVATIVE;
exports.MAX_DRAW_BUFFERS = MAX_DRAW_BUFFERS;
exports.DRAW_BUFFER0 = DRAW_BUFFER0;
exports.DRAW_BUFFER1 = DRAW_BUFFER1;
exports.DRAW_BUFFER2 = DRAW_BUFFER2;
exports.DRAW_BUFFER3 = DRAW_BUFFER3;
exports.DRAW_BUFFER4 = DRAW_BUFFER4;
exports.DRAW_BUFFER5 = DRAW_BUFFER5;
exports.DRAW_BUFFER6 = DRAW_BUFFER6;
exports.DRAW_BUFFER7 = DRAW_BUFFER7;
exports.DRAW_BUFFER8 = DRAW_BUFFER8;
exports.DRAW_BUFFER9 = DRAW_BUFFER9;
exports.DRAW_BUFFER10 = DRAW_BUFFER10;
exports.DRAW_BUFFER11 = DRAW_BUFFER11;
exports.DRAW_BUFFER12 = DRAW_BUFFER12;
exports.DRAW_BUFFER13 = DRAW_BUFFER13;
exports.DRAW_BUFFER14 = DRAW_BUFFER14;
exports.DRAW_BUFFER15 = DRAW_BUFFER15;
exports.MAX_COLOR_ATTACHMENTS = MAX_COLOR_ATTACHMENTS;
exports.COLOR_ATTACHMENT1 = COLOR_ATTACHMENT1;
exports.COLOR_ATTACHMENT2 = COLOR_ATTACHMENT2;
exports.COLOR_ATTACHMENT3 = COLOR_ATTACHMENT3;
exports.COLOR_ATTACHMENT4 = COLOR_ATTACHMENT4;
exports.COLOR_ATTACHMENT5 = COLOR_ATTACHMENT5;
exports.COLOR_ATTACHMENT6 = COLOR_ATTACHMENT6;
exports.COLOR_ATTACHMENT7 = COLOR_ATTACHMENT7;
exports.COLOR_ATTACHMENT8 = COLOR_ATTACHMENT8;
exports.COLOR_ATTACHMENT9 = COLOR_ATTACHMENT9;
exports.COLOR_ATTACHMENT10 = COLOR_ATTACHMENT10;
exports.COLOR_ATTACHMENT11 = COLOR_ATTACHMENT11;
exports.COLOR_ATTACHMENT12 = COLOR_ATTACHMENT12;
exports.COLOR_ATTACHMENT13 = COLOR_ATTACHMENT13;
exports.COLOR_ATTACHMENT14 = COLOR_ATTACHMENT14;
exports.COLOR_ATTACHMENT15 = COLOR_ATTACHMENT15;
exports.SAMPLER_3D = SAMPLER_3D;
exports.SAMPLER_2D_SHADOW = SAMPLER_2D_SHADOW;
exports.SAMPLER_2D_ARRAY = SAMPLER_2D_ARRAY;
exports.SAMPLER_2D_ARRAY_SHADOW = SAMPLER_2D_ARRAY_SHADOW;
exports.SAMPLER_CUBE_SHADOW = SAMPLER_CUBE_SHADOW;
exports.INT_SAMPLER_2D = INT_SAMPLER_2D;
exports.INT_SAMPLER_3D = INT_SAMPLER_3D;
exports.INT_SAMPLER_CUBE = INT_SAMPLER_CUBE;
exports.INT_SAMPLER_2D_ARRAY = INT_SAMPLER_2D_ARRAY;
exports.UNSIGNED_INT_SAMPLER_2D = UNSIGNED_INT_SAMPLER_2D;
exports.UNSIGNED_INT_SAMPLER_3D = UNSIGNED_INT_SAMPLER_3D;
exports.UNSIGNED_INT_SAMPLER_CUBE = UNSIGNED_INT_SAMPLER_CUBE;
exports.UNSIGNED_INT_SAMPLER_2D_ARRAY = UNSIGNED_INT_SAMPLER_2D_ARRAY;
exports.MAX_SAMPLES = MAX_SAMPLES;
exports.SAMPLER_BINDING = SAMPLER_BINDING;
exports.PIXEL_PACK_BUFFER = PIXEL_PACK_BUFFER;
exports.PIXEL_UNPACK_BUFFER = PIXEL_UNPACK_BUFFER;
exports.PIXEL_PACK_BUFFER_BINDING = PIXEL_PACK_BUFFER_BINDING;
exports.PIXEL_UNPACK_BUFFER_BINDING = PIXEL_UNPACK_BUFFER_BINDING;
exports.COPY_READ_BUFFER = COPY_READ_BUFFER;
exports.COPY_WRITE_BUFFER = COPY_WRITE_BUFFER;
exports.COPY_READ_BUFFER_BINDING = COPY_READ_BUFFER_BINDING;
exports.COPY_WRITE_BUFFER_BINDING = COPY_WRITE_BUFFER_BINDING;
exports.FLOAT_MAT2x3 = FLOAT_MAT2x3;
exports.FLOAT_MAT2x4 = FLOAT_MAT2x4;
exports.FLOAT_MAT3x2 = FLOAT_MAT3x2;
exports.FLOAT_MAT3x4 = FLOAT_MAT3x4;
exports.FLOAT_MAT4x2 = FLOAT_MAT4x2;
exports.FLOAT_MAT4x3 = FLOAT_MAT4x3;
exports.UNSIGNED_INT_VEC2 = UNSIGNED_INT_VEC2;
exports.UNSIGNED_INT_VEC3 = UNSIGNED_INT_VEC3;
exports.UNSIGNED_INT_VEC4 = UNSIGNED_INT_VEC4;
exports.UNSIGNED_NORMALIZED = UNSIGNED_NORMALIZED;
exports.SIGNED_NORMALIZED = SIGNED_NORMALIZED;
exports.VERTEX_ATTRIB_ARRAY_INTEGER = VERTEX_ATTRIB_ARRAY_INTEGER;
exports.VERTEX_ATTRIB_ARRAY_DIVISOR = VERTEX_ATTRIB_ARRAY_DIVISOR;
exports.TRANSFORM_FEEDBACK_BUFFER_MODE = TRANSFORM_FEEDBACK_BUFFER_MODE;
exports.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS;
exports.TRANSFORM_FEEDBACK_VARYINGS = TRANSFORM_FEEDBACK_VARYINGS;
exports.TRANSFORM_FEEDBACK_BUFFER_START = TRANSFORM_FEEDBACK_BUFFER_START;
exports.TRANSFORM_FEEDBACK_BUFFER_SIZE = TRANSFORM_FEEDBACK_BUFFER_SIZE;
exports.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN;
exports.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS = MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS;
exports.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS = MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS;
exports.INTERLEAVED_ATTRIBS = INTERLEAVED_ATTRIBS;
exports.SEPARATE_ATTRIBS = SEPARATE_ATTRIBS;
exports.TRANSFORM_FEEDBACK_BUFFER = TRANSFORM_FEEDBACK_BUFFER;
exports.TRANSFORM_FEEDBACK_BUFFER_BINDING = TRANSFORM_FEEDBACK_BUFFER_BINDING;
exports.TRANSFORM_FEEDBACK = TRANSFORM_FEEDBACK;
exports.TRANSFORM_FEEDBACK_PAUSED = TRANSFORM_FEEDBACK_PAUSED;
exports.TRANSFORM_FEEDBACK_ACTIVE = TRANSFORM_FEEDBACK_ACTIVE;
exports.TRANSFORM_FEEDBACK_BINDING = TRANSFORM_FEEDBACK_BINDING;
exports.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING;
exports.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE = FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE;
exports.FRAMEBUFFER_ATTACHMENT_RED_SIZE = FRAMEBUFFER_ATTACHMENT_RED_SIZE;
exports.FRAMEBUFFER_ATTACHMENT_GREEN_SIZE = FRAMEBUFFER_ATTACHMENT_GREEN_SIZE;
exports.FRAMEBUFFER_ATTACHMENT_BLUE_SIZE = FRAMEBUFFER_ATTACHMENT_BLUE_SIZE;
exports.FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE = FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE;
exports.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE = FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE;
exports.FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE = FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE;
exports.FRAMEBUFFER_DEFAULT = FRAMEBUFFER_DEFAULT;
exports.DEPTH_STENCIL_ATTACHMENT = DEPTH_STENCIL_ATTACHMENT;
exports.DEPTH_STENCIL = DEPTH_STENCIL;
exports.DEPTH24_STENCIL8 = DEPTH24_STENCIL8;
exports.DRAW_FRAMEBUFFER_BINDING = DRAW_FRAMEBUFFER_BINDING;
exports.READ_FRAMEBUFFER = READ_FRAMEBUFFER;
exports.DRAW_FRAMEBUFFER = DRAW_FRAMEBUFFER;
exports.READ_FRAMEBUFFER_BINDING = READ_FRAMEBUFFER_BINDING;
exports.RENDERBUFFER_SAMPLES = RENDERBUFFER_SAMPLES;
exports.FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER;
exports.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = FRAMEBUFFER_INCOMPLETE_MULTISAMPLE;
exports.UNIFORM_BUFFER = UNIFORM_BUFFER;
exports.UNIFORM_BUFFER_BINDING = UNIFORM_BUFFER_BINDING;
exports.UNIFORM_BUFFER_START = UNIFORM_BUFFER_START;
exports.UNIFORM_BUFFER_SIZE = UNIFORM_BUFFER_SIZE;
exports.MAX_VERTEX_UNIFORM_BLOCKS = MAX_VERTEX_UNIFORM_BLOCKS;
exports.MAX_FRAGMENT_UNIFORM_BLOCKS = MAX_FRAGMENT_UNIFORM_BLOCKS;
exports.MAX_COMBINED_UNIFORM_BLOCKS = MAX_COMBINED_UNIFORM_BLOCKS;
exports.MAX_UNIFORM_BUFFER_BINDINGS = MAX_UNIFORM_BUFFER_BINDINGS;
exports.MAX_UNIFORM_BLOCK_SIZE = MAX_UNIFORM_BLOCK_SIZE;
exports.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS;
exports.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS;
exports.UNIFORM_BUFFER_OFFSET_ALIGNMENT = UNIFORM_BUFFER_OFFSET_ALIGNMENT;
exports.ACTIVE_UNIFORM_BLOCKS = ACTIVE_UNIFORM_BLOCKS;
exports.UNIFORM_TYPE = UNIFORM_TYPE;
exports.UNIFORM_SIZE = UNIFORM_SIZE;
exports.UNIFORM_BLOCK_INDEX = UNIFORM_BLOCK_INDEX;
exports.UNIFORM_OFFSET = UNIFORM_OFFSET;
exports.UNIFORM_ARRAY_STRIDE = UNIFORM_ARRAY_STRIDE;
exports.UNIFORM_MATRIX_STRIDE = UNIFORM_MATRIX_STRIDE;
exports.UNIFORM_IS_ROW_MAJOR = UNIFORM_IS_ROW_MAJOR;
exports.UNIFORM_BLOCK_BINDING = UNIFORM_BLOCK_BINDING;
exports.UNIFORM_BLOCK_DATA_SIZE = UNIFORM_BLOCK_DATA_SIZE;
exports.UNIFORM_BLOCK_ACTIVE_UNIFORMS = UNIFORM_BLOCK_ACTIVE_UNIFORMS;
exports.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES;
exports.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER;
exports.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER;
exports.OBJECT_TYPE = OBJECT_TYPE;
exports.SYNC_CONDITION = SYNC_CONDITION;
exports.SYNC_STATUS = SYNC_STATUS;
exports.SYNC_FLAGS = SYNC_FLAGS;
exports.SYNC_FENCE = SYNC_FENCE;
exports.SYNC_GPU_COMMANDS_COMPLETE = SYNC_GPU_COMMANDS_COMPLETE;
exports.UNSIGNALED = UNSIGNALED;
exports.SIGNALED = SIGNALED;
exports.ALREADY_SIGNALED = ALREADY_SIGNALED;
exports.TIMEOUT_EXPIRED = TIMEOUT_EXPIRED;
exports.CONDITION_SATISFIED = CONDITION_SATISFIED;
exports.WAIT_FAILED = WAIT_FAILED;
exports.SYNC_FLUSH_COMMANDS_BIT = SYNC_FLUSH_COMMANDS_BIT;
exports.COLOR = COLOR;
exports.DEPTH = DEPTH;
exports.STENCIL = STENCIL;
exports.MIN = MIN;
exports.MAX = MAX;
exports.DEPTH_COMPONENT24 = DEPTH_COMPONENT24;
exports.STREAM_READ = STREAM_READ;
exports.STREAM_COPY = STREAM_COPY;
exports.STATIC_READ = STATIC_READ;
exports.STATIC_COPY = STATIC_COPY;
exports.DYNAMIC_READ = DYNAMIC_READ;
exports.DYNAMIC_COPY = DYNAMIC_COPY;
exports.DEPTH_COMPONENT32F = DEPTH_COMPONENT32F;
exports.DEPTH32F_STENCIL8 = DEPTH32F_STENCIL8;
exports.INVALID_INDEX = INVALID_INDEX;
exports.TIMEOUT_IGNORED = TIMEOUT_IGNORED;
exports.MAX_CLIENT_WAIT_TIMEOUT_WEBGL = MAX_CLIENT_WAIT_TIMEOUT_WEBGL;
exports.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE = VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE;
exports.UNMASKED_VENDOR_WEBGL = UNMASKED_VENDOR_WEBGL;
exports.UNMASKED_RENDERER_WEBGL = UNMASKED_RENDERER_WEBGL;
exports.MAX_TEXTURE_MAX_ANISOTROPY_EXT = MAX_TEXTURE_MAX_ANISOTROPY_EXT;
exports.TEXTURE_MAX_ANISOTROPY_EXT = TEXTURE_MAX_ANISOTROPY_EXT;
exports.COMPRESSED_RGB_S3TC_DXT1_EXT = COMPRESSED_RGB_S3TC_DXT1_EXT;
exports.COMPRESSED_RGBA_S3TC_DXT1_EXT = COMPRESSED_RGBA_S3TC_DXT1_EXT;
exports.COMPRESSED_RGBA_S3TC_DXT3_EXT = COMPRESSED_RGBA_S3TC_DXT3_EXT;
exports.COMPRESSED_RGBA_S3TC_DXT5_EXT = COMPRESSED_RGBA_S3TC_DXT5_EXT;
exports.COMPRESSED_R11_EAC = COMPRESSED_R11_EAC;
exports.COMPRESSED_SIGNED_R11_EAC = COMPRESSED_SIGNED_R11_EAC;
exports.COMPRESSED_RG11_EAC = COMPRESSED_RG11_EAC;
exports.COMPRESSED_SIGNED_RG11_EAC = COMPRESSED_SIGNED_RG11_EAC;
exports.COMPRESSED_RGB8_ETC2 = COMPRESSED_RGB8_ETC2;
exports.COMPRESSED_RGBA8_ETC2_EAC = COMPRESSED_RGBA8_ETC2_EAC;
exports.COMPRESSED_SRGB8_ETC2 = COMPRESSED_SRGB8_ETC2;
exports.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = COMPRESSED_SRGB8_ALPHA8_ETC2_EAC;
exports.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2;
exports.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2;
exports.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
exports.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
exports.COMPRESSED_RGB_PVRTC_2BPPV1_IMG = COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
exports.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
exports.COMPRESSED_RGB_ETC1_WEBGL = COMPRESSED_RGB_ETC1_WEBGL;
exports.COMPRESSED_RGB_ATC_WEBGL = COMPRESSED_RGB_ATC_WEBGL;
exports.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL;
exports.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL;
exports.UNSIGNED_INT_24_8_WEBGL = UNSIGNED_INT_24_8_WEBGL;
exports.HALF_FLOAT_OES = HALF_FLOAT_OES;
exports.RGBA32F_EXT = RGBA32F_EXT;
exports.RGB32F_EXT = RGB32F_EXT;
exports.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT = FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT;
exports.UNSIGNED_NORMALIZED_EXT = UNSIGNED_NORMALIZED_EXT;
exports.MIN_EXT = MIN_EXT;
exports.MAX_EXT = MAX_EXT;
exports.SRGB_EXT = SRGB_EXT;
exports.SRGB_ALPHA_EXT = SRGB_ALPHA_EXT;
exports.SRGB8_ALPHA8_EXT = SRGB8_ALPHA8_EXT;
exports.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT = FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT;
exports.FRAGMENT_SHADER_DERIVATIVE_HINT_OES = FRAGMENT_SHADER_DERIVATIVE_HINT_OES;
exports.COLOR_ATTACHMENT0_WEBGL = COLOR_ATTACHMENT0_WEBGL;
exports.COLOR_ATTACHMENT1_WEBGL = COLOR_ATTACHMENT1_WEBGL;
exports.COLOR_ATTACHMENT2_WEBGL = COLOR_ATTACHMENT2_WEBGL;
exports.COLOR_ATTACHMENT3_WEBGL = COLOR_ATTACHMENT3_WEBGL;
exports.COLOR_ATTACHMENT4_WEBGL = COLOR_ATTACHMENT4_WEBGL;
exports.COLOR_ATTACHMENT5_WEBGL = COLOR_ATTACHMENT5_WEBGL;
exports.COLOR_ATTACHMENT6_WEBGL = COLOR_ATTACHMENT6_WEBGL;
exports.COLOR_ATTACHMENT7_WEBGL = COLOR_ATTACHMENT7_WEBGL;
exports.COLOR_ATTACHMENT8_WEBGL = COLOR_ATTACHMENT8_WEBGL;
exports.COLOR_ATTACHMENT9_WEBGL = COLOR_ATTACHMENT9_WEBGL;
exports.COLOR_ATTACHMENT10_WEBGL = COLOR_ATTACHMENT10_WEBGL;
exports.COLOR_ATTACHMENT11_WEBGL = COLOR_ATTACHMENT11_WEBGL;
exports.COLOR_ATTACHMENT12_WEBGL = COLOR_ATTACHMENT12_WEBGL;
exports.COLOR_ATTACHMENT13_WEBGL = COLOR_ATTACHMENT13_WEBGL;
exports.COLOR_ATTACHMENT14_WEBGL = COLOR_ATTACHMENT14_WEBGL;
exports.COLOR_ATTACHMENT15_WEBGL = COLOR_ATTACHMENT15_WEBGL;
exports.DRAW_BUFFER0_WEBGL = DRAW_BUFFER0_WEBGL;
exports.DRAW_BUFFER1_WEBGL = DRAW_BUFFER1_WEBGL;
exports.DRAW_BUFFER2_WEBGL = DRAW_BUFFER2_WEBGL;
exports.DRAW_BUFFER3_WEBGL = DRAW_BUFFER3_WEBGL;
exports.DRAW_BUFFER4_WEBGL = DRAW_BUFFER4_WEBGL;
exports.DRAW_BUFFER5_WEBGL = DRAW_BUFFER5_WEBGL;
exports.DRAW_BUFFER6_WEBGL = DRAW_BUFFER6_WEBGL;
exports.DRAW_BUFFER7_WEBGL = DRAW_BUFFER7_WEBGL;
exports.DRAW_BUFFER8_WEBGL = DRAW_BUFFER8_WEBGL;
exports.DRAW_BUFFER9_WEBGL = DRAW_BUFFER9_WEBGL;
exports.DRAW_BUFFER10_WEBGL = DRAW_BUFFER10_WEBGL;
exports.DRAW_BUFFER11_WEBGL = DRAW_BUFFER11_WEBGL;
exports.DRAW_BUFFER12_WEBGL = DRAW_BUFFER12_WEBGL;
exports.DRAW_BUFFER13_WEBGL = DRAW_BUFFER13_WEBGL;
exports.DRAW_BUFFER14_WEBGL = DRAW_BUFFER14_WEBGL;
exports.DRAW_BUFFER15_WEBGL = DRAW_BUFFER15_WEBGL;
exports.MAX_COLOR_ATTACHMENTS_WEBGL = MAX_COLOR_ATTACHMENTS_WEBGL;
exports.MAX_DRAW_BUFFERS_WEBGL = MAX_DRAW_BUFFERS_WEBGL;
exports.VERTEX_ARRAY_BINDING_OES = VERTEX_ARRAY_BINDING_OES;
exports.QUERY_COUNTER_BITS_EXT = QUERY_COUNTER_BITS_EXT;
exports.CURRENT_QUERY_EXT = CURRENT_QUERY_EXT;
exports.QUERY_RESULT_EXT = QUERY_RESULT_EXT;
exports.QUERY_RESULT_AVAILABLE_EXT = QUERY_RESULT_AVAILABLE_EXT;
exports.TIME_ELAPSED_EXT = TIME_ELAPSED_EXT;
exports.TIMESTAMP_EXT = TIMESTAMP_EXT;
exports.GPU_DISJOINT_EXT = GPU_DISJOINT_EXT;

Object.defineProperty(exports, '__esModule', { value: true });

})));

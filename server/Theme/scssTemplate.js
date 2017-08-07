export const scss = (themePath) =>
`// This file is automatically generated. Any changes made to this file
// will be lost when changing themes.
@import '~${themePath}';
@import 'app';
`;

export default scss;
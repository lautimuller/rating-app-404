import { colors } from '../../styles/colors';

const color = {
  color: colors.black,
};

export const TypographyStyles = {
  Title: {
    ...color,
    fontSize: 22,
    fontWeight: 'bold' as const,
  },
  Subtitle: {
    ...color,
    fontSize: 17,
  },
  Paragraph: {
    ...color,
    fontSize: 15,
  },
  Label: {
    ...color,
    fontSize: 13,
  },
};

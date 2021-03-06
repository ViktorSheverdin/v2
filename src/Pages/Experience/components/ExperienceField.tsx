import { Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const ExperienceField = ({ from, to, title, company, city }) => {
  return (
    <Stack
      direction='column'
      sx={{
        marginTop: '12rem',
      }}
    >
      <Stack
        direction='row'
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
        sx={{
          '&:before': {
            content: '""',
            height: '7px',
            width: '7px',
            background: '#fff',
            left: '49.3%',
            marginTop: '0.6rem',
            position: 'absolute',
            borderRadius: '50%',
          },
        }}
      >
        <Typography
          sx={{
            '&:before': {
              content: '""',
              height: '1.5rem',
              width: '1.5rem',
              background: 'hsla(0,0%,100%,.2)',
              left: '48.8%',
              position: 'absolute',
              borderRadius: '50%',
            },
            maxWidth: '18.5rem',
            width: '18.5rem',
            marginLeft: '12rem',
            color: 'primary.200',
          }}
        >
          {from} to {to}
        </Typography>
        <Stack
          direction='column'
          sx={{ width: '40rem', maxWidth: '40rem', paddingLeft: '10rem' }}
        >
          <Typography
            sx={{
              color: 'primary.200',
              fontSize: '2.1rem',
              textTransform: 'uppercase',
              marginBottom: '2rem',
            }}
          >
            {title}
          </Typography>
          <Typography sx={{ color: 'primary.200' }}>{company}</Typography>
          <Typography sx={{ color: 'primary.200' }}>{city}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ExperienceField;

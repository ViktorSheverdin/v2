import { useState } from 'react';
import { Box, Stack, Typography, Tabs, Tab } from '@mui/material';
import ProjectsGrid from './components/ProjectsGrid';

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <Box
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      sx={{ width: '100%' }}
      {...other}
    >
      {value === index && (
        <Box sx={{ padding: '1.8rem', width: '100%' }}>
          <Box sx={{ justifyContent: 'center', display: 'flex' }}>
            {children}
          </Box>
        </Box>
      )}
    </Box>
  );
};

const TypographyTitle = ({ title }) => {
  return (
    <Typography
      sx={{
        fontFamily: 'Heebo ,sans-serif',
        fontSize: '1.6rem',
        lineHeight: '2rem',
        fontWeight: '500',
      }}
    >
      {title}
    </Typography>
  );
};

const Projects = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'primary.200',
        paddingY: '12rem',
      }}
    >
      <Stack sx={{ width: '70%', justifyContent: 'center' }}>
        <Stack sx={{ width: '100%', alignItems: 'center' }}>
          <Typography
            sx={{
              fontFamily: 'Heebo ,sans-serif',
              fontSize: '3.6rem',
              marginBottom: '1.8rem',
              textTransform: 'uppercase',
              lineHeight: '3.8rem',
            }}
          >
            My latest featured projects
          </Typography>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='basic tabs example'
            >
              <Tab
                label={<TypographyTitle title={'All'} />}
                {...a11yProps(0)}
              />
              <Tab
                label={<TypographyTitle title={'React'} />}
                {...a11yProps(1)}
                sx={{ marginLeft: '2.8rem' }}
              />
              <Tab
                label={<TypographyTitle title={'Python'} />}
                {...a11yProps(2)}
                sx={{ marginLeft: '2.8rem' }}
              />
              {/* <Tab
                label={<TypographyTitle title={"All"} />}
                {...a11yProps(3)}
                sx={{ marginLeft: '2.8rem' }}
              /> */}
            </Tabs>
          </Box>
          <TabPanel value={value} index={0} sx={{ alignContent: 'center' }}>
            <ProjectsGrid filters={[]} />
          </TabPanel>
          <TabPanel value={value} index={1} sx={{ alignContent: 'center' }}>
            <ProjectsGrid filters={['React']} />
          </TabPanel>
          <TabPanel
            value={value}
            index={2}
            sx={{ alignContent: 'center', alignItems: 'center' }}
          >
            <ProjectsGrid filters={['Python']} />
          </TabPanel>
          {/* <TabPanel value={value} index={3} sx={{ alignContent: 'center' }}>
            <ProjectsGrid filters={['Flutter']} />
          </TabPanel> */}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Projects;

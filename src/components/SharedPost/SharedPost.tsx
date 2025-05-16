import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { SharedPostData } from './types';

export default function SharedPost({ data }: { data: SharedPostData }) {
  return (
    <Paper elevation={2} sx={{ p: 2, borderRadius: 2, mb: 2, bgcolor: '#f8faff' }}>
      <Typography variant="caption" color="text.secondary">
        Shared by {data.author}
      </Typography>
      <Box mt={1}>
        <Typography variant="subtitle2" fontWeight={600}>
          {data.originalAuthor}
        </Typography>
        <Typography variant="body1">{data.content}</Typography>
      </Box>
    </Paper>
  );
} 
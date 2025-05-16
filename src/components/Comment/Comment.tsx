import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { CommentData } from './types';

export default function Comment({ data }: { data: CommentData }) {
  return (
    <Paper elevation={1} sx={{ p: 2, borderRadius: 2, mb: 2 }}>
      <Typography variant="subtitle2" fontWeight={600} gutterBottom>
        {data.author}
      </Typography>
      <Typography variant="body1">{data.text}</Typography>
    </Paper>
  );
} 
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';


        function HomePage() {

          return (
                       
            <Card sx={{ maxWidth: 645}}>
            <CardActionArea>
              <CardMedia/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Bem-vindos(as)
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Use a barra de navegação para listar ou cadastrar alunos e matérias
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
            
          );
        }
        

export default HomePage;
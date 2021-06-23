import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       width: '100%',
//       maxWidth: 360,
//       backgroundColor: theme.palette.background.paper,
//     },
// }));

function ListChat() {
    // const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);
  
    const handleListItemClick = (e, index) => {
      setSelectedIndex(index);
    };

    return (
        <div>
            <ListItem 
                button
                selected={selectedIndex === 0}
                onClick={(e) => handleListItemClick(e, 0)}
            >
                <ListItemAvatar>
                    <Avatar src="https://avatars.githubusercontent.com/u/56160839?v=4">K</Avatar>
                </ListItemAvatar>
                <ListItemText primary="Khoa" />
            </ListItem>

            <ListItem 
                button
                selected={selectedIndex === 1}
                onClick={(e) => handleListItemClick(e, 1)}
            >
                <ListItemIcon>
                    <Avatar src="https://avatars.githubusercontent.com/u/44116015?v=4">T</Avatar>
                </ListItemIcon>
                <ListItemText primary="Tài" />
            </ListItem>

            <ListItem 
                button
                selected={selectedIndex === 2}
                onClick={(e) => handleListItemClick(e, 2)}
            >
                <ListItemAvatar>
                    <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg/800px-Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg">K</Avatar>
                </ListItemAvatar>
                <ListItemText primary="Chris Hemsworth" />
            </ListItem>

            <ListItem 
                button
                selected={selectedIndex === 3}
                onClick={(e) => handleListItemClick(e, 3)}
            >
                <ListItemIcon>
                    <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%29.jpg/800px-Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%29.jpg">T</Avatar>
                </ListItemIcon>
                <ListItemText primary="Scarlett Johansson" />
            </ListItem>

            <ListItem 
                button
                selected={selectedIndex === 4}
                onClick={(e) => handleListItemClick(e, 4)}
            >
                <ListItemAvatar>
                    <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Benedict_Cumberbatch_%2848470894756%29_%28cropped%29.jpg/800px-Benedict_Cumberbatch_%2848470894756%29_%28cropped%29.jpg">K</Avatar>
                </ListItemAvatar>
                <ListItemText primary="Benedict Cumberbatch" />
            </ListItem>

            <ListItem 
                button
                selected={selectedIndex === 5}
                onClick={(e) => handleListItemClick(e, 5)}
            >
                <ListItemIcon>
                    <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Paul_Rudd_2_SDCC_2014.jpg/800px-Paul_Rudd_2_SDCC_2014.jpg">T</Avatar>
                </ListItemIcon>
                <ListItemText primary="Paul Rudd" />
            </ListItem>

            <ListItem 
                button
                selected={selectedIndex === 6}
                onClick={(e) => handleListItemClick(e, 6)}
            >
                <ListItemAvatar>
                    <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/800px-Tom_Holland_by_Gage_Skidmore.jpg">K</Avatar>
                </ListItemAvatar>
                <ListItemText primary="Tom Holland" />
            </ListItem>

            <ListItem 
                button
                selected={selectedIndex === 7}
                onClick={(e) => handleListItemClick(e, 7)}
            >
                <ListItemIcon>
                    <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Ryan_Reynolds_by_Gage_Skidmore.jpg/800px-Ryan_Reynolds_by_Gage_Skidmore.jpg">T</Avatar>
                </ListItemIcon>
                <ListItemText primary="Ryan Reynolds" />
            </ListItem>

            <ListItem 
                button
                selected={selectedIndex === 8}
                onClick={(e) => handleListItemClick(e, 8)}
            >
                <ListItemAvatar>
                    <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg/800px-Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg">K</Avatar>
                </ListItemAvatar>
                <ListItemText primary="Robert Downey Jr." />
            </ListItem>

            <ListItem 
                button
                selected={selectedIndex === 9}
                onClick={(e) => handleListItemClick(e, 9)}
            >
                <ListItemIcon>
                    <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Mark_Ruffalo_in_2017_by_Gage_Skidmore.jpg/800px-Mark_Ruffalo_in_2017_by_Gage_Skidmore.jpg">T</Avatar>
                </ListItemIcon>
                <ListItemText primary="Mark Ruffalo" />
            </ListItem>

            <ListItem 
                button
                selected={selectedIndex === 10}
                onClick={(e) => handleListItemClick(e, 10)}
            >
                <ListItemAvatar>
                    <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samuel_L._Jackson_SDCC_2014_%28cropped_2%29.jpg/800px-Samuel_L._Jackson_SDCC_2014_%28cropped_2%29.jpg">K</Avatar>
                </ListItemAvatar>
                <ListItemText primary="Samuel L. Jackson" />
            </ListItem>

            <ListItem 
                button
                selected={selectedIndex === 11}
                onClick={(e) => handleListItemClick(e, 11)}
            >
                <ListItemIcon>
                    <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Jeremy_Renner_by_Gage_Skidmore.jpg/800px-Jeremy_Renner_by_Gage_Skidmore.jpg">T</Avatar>
                </ListItemIcon>
                <ListItemText primary="Jeremy Renner" />
            </ListItem>

            <ListItem 
                button
                selected={selectedIndex === 12}
                onClick={(e) => handleListItemClick(e, 12)}
            >
                <ListItemAvatar>
                    <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Chadwick_Boseman_by_Gage_Skidmore_July_2017_%28cropped%29.jpg/800px-Chadwick_Boseman_by_Gage_Skidmore_July_2017_%28cropped%29.jpg">K</Avatar>
                </ListItemAvatar>
                <ListItemText primary="Chadwick Boseman" />
            </ListItem>

            <ListItem 
                button
                selected={selectedIndex === 13}
                onClick={(e) => handleListItemClick(e, 13)}
            >
                <ListItemIcon>
                    <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Chris_Evans_SDCC_2014.jpg/800px-Chris_Evans_SDCC_2014.jpg">T</Avatar>
                </ListItemIcon>
                <ListItemText primary="Chris Evans" />
            </ListItem>

        </div>
    )
}

export default ListChat
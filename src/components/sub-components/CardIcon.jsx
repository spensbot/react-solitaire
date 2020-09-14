import React from 'react'
import { makeStyles } from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import FixedAspectRatio from './FixedAspectRatio';


const useStyles = makeStyles( theme => ({
  
}))

export default function CardIcon({suit, size}) {
  const classes = useStyles()

  let Icon = StarIcon
  if (suit === 'spades') Icon = VisibilityIcon
  else if (suit === 'hearts') Icon = FavoriteIcon
  else if (suit === 'diamonds') Icon = ThumbUpIcon

  return (
    <Icon style={size ? {width: size, height: size} : null}/>
  )
}

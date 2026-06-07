"use client";
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton'; // 🌟 استيراد الـ IconButton الأساسي للحل
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';

// تحديد نوع الـ Items بدقة لضمان استقرار الكود
interface MenuItemType {
  link: string;
  title: string;
}

export default function MenuCustom({ items = [], className }: { items: MenuItemType[], className?: string }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget); // الأن يعمل بسلام لأن الـ currentTarget سيكون الـ IconButton (HTMLElement)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='menu'>
      <IconButton
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={handleClick}
        color="inherit" className='bg-rose-400'

      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {(items || []).map((item, index) => {
          if (!item || !item.link) return null;
          return (
            <MenuItem
              key={index}
              onClick={handleClose}
              component={Link}
              href={item.link}
            >
              {item.title}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
import React from 'react';
import { Badge, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const styles = {
    reviewerBadge: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '8px',
    },
    starIcon: {
        fontSize: '40px',
        color: 'black',
    },
};
const TopReviewerBadge = ({ showBadge }) => {
    if (!showBadge) {
        return null;
    }
    

    return (
        <Badge color="secondary">
            <div style={styles.reviewerBadge}>
                <StarIcon style={styles.starIcon} data-testid={'top-reviewer-badge'}/>
                <Typography variant="body2" fontSize='20px'>Top Reviewer</Typography>
            </div>
        </Badge>
    );
};

export default TopReviewerBadge;

/**
 *
 * Link
 *
 */

import React from "react";
import PropTypes from 'prop-types';
import LinkContainer from "./LinkContainer";
import LinkAnchor from "./LinkAnchor";
import Description from "./Description";
import VotingContainer from "./VotingContainer";
import VotingCount from "./VotingCount";
import DetailsContainer from "./DetailsContainer";
// import styled from 'styled-components';
import './styles.css';


// const Link = ({ article }) => (
//     <div className={'link'}>
//       <div className={'votingContainer'}>
//         <div className={'votingCount'}>
//           0
//         </div>
//       </div>
//       <div className={'detailsContainer'}>
//         <div>
//           <a
//               href={article.url}
//               className={'linkAnchor'}
//           >
//             {article.url}
//           </a>
//         </div>
//         <div className={'description'}>
//           {article.title}
//         </div>
//       </div>
//     </div>
// );

const Link = ({ article }) => (
      <LinkContainer>
        <VotingContainer>
          <VotingCount>
            0
          </VotingCount>
        </VotingContainer>
        <DetailsContainer>
          <div>
            <LinkAnchor href={article.url}>
              {article.url}
            </LinkAnchor>
            <Description>{article.title}</Description>
          </div>
        </DetailsContainer>
      </LinkContainer>
);


Link.propTypes = {
  article: PropTypes.object.isRequired,
};

export default Link;

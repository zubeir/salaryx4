import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Form, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fuse from 'fuse.js';
import { Link } from 'react-router-dom';
import Avatar from 'components/common/Avatar';
import { isIterableArray } from 'helpers/utils';
import Flex from 'components/common/Flex';
import FalconCloseButton from 'components/common/FalconCloseButton';
import SubtleBadge from 'components/common/SubtleBadge';

const MediaSearchContent = ({ item }) => {
  return (
    <Dropdown.Item className="px-x1 py-2" as={Link} to={item.url}>
      <Flex alignItems="center">
        {item.file && (
          <div className="file-thumbnail">
            <img src={item.img} alt="" className={item.imgAttrs.class} />
          </div>
        )}
        {item.icon && (
          <Avatar src={item.icon.img} size="l" className={item.icon.status} />
        )}

        <div className="ms-2">
          <h6 className="mb-0">{item.title}</h6>
          <p
            className="fs-11 mb-0"
            dangerouslySetInnerHTML={{ __html: item.text || item.time }}
          />
        </div>
      </Flex>
    </Dropdown.Item>
  );
};

const SearchBox = ({ autoCompleteItem }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [resultItem, setResultItem] = useState(autoCompleteItem);

  const fuseJsOptions = {
    includeScore: true,
    keys: ['title', 'text', 'breadCrumbTexts']
  };

  let searchResult = new Fuse(autoCompleteItem, fuseJsOptions)
    .search(searchInputValue)
    .map(item => item.item);

  const recentlyBrowsedItems = resultItem.filter(
    item => item.catagories === 'recentlyBrowsedItems'
  );

  const suggestedFilters = resultItem.filter(
    item => item.catagories === 'suggestedFilters'
  );

  const suggestionFiles = resultItem.filter(
    item => item.catagories === 'suggestionFiles'
  );

  const suggestionMembers = resultItem.filter(
    item => item.catagories === 'suggestionMembers'
  );

  useEffect(() => {
    if (searchInputValue) {
      setResultItem(searchResult);
      isIterableArray(searchResult) && setDropdownOpen(true);
    } else {
      setResultItem(autoCompleteItem);
    }

    // eslint-disable-next-line
  }, [searchInputValue]);

  return (
    <Dropdown
      show={dropdownOpen}
      className="search-box"
      onToggle={() => setDropdownOpen(!dropdownOpen)}
    >
      <Dropdown.Toggle as="div" className="dropdown-caret-none">
        <Form className="position-relative">
          <Form.Control
            type="search"
            placeholder="Search..."
            aria-label="Search"
            className="rounded-pill search-input"
            value={searchInputValue}
            onChange={({ target }) => setSearchInputValue(target.value)}
          />
          <FontAwesomeIcon
            icon="search"
            className="position-absolute text-400 search-box-icon"
          />
          {(dropdownOpen || searchInputValue) && (
            <div className="search-box-close-btn-container">
              <FalconCloseButton
                size="sm"
                noOutline
                className="fs-11"
                onClick={() => {
                  setSearchInputValue('');
                  setDropdownOpen(false);
                }}
              />
            </div>
          )}
        </Form>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <div className="scrollbar py-3" style={{ maxHeight: '24rem' }}>
          {isIterableArray(recentlyBrowsedItems) && (
            <>
              <Dropdown.Header as="h6" className="px-x1 pt-0 pb-2 fw-medium">
                Recently Browsed
              </Dropdown.Header>
              {recentlyBrowsedItems.map(item => (
                <Dropdown.Item
                  as={Link}
                  to={item.url}
                  className="fs-10 px-x1 py-1 hover-primary"
                  key={item.id}
                >
                  <Flex alignItems="center">
                    <FontAwesomeIcon
                      icon="circle"
                      className="me-2 text-300 fs-11"
                    />
                    <div className="fw-normal">
                      {item.breadCrumbTexts.map((breadCrumbText, index) => {
                        return (
                          <Fragment key={breadCrumbText}>
                            {breadCrumbText}
                            {item.breadCrumbTexts.length - 1 > index && (
                              <FontAwesomeIcon
                                icon="chevron-right"
                                className="mx-1 text-500 fs-11"
                                transform="shrink 2"
                              />
                            )}
                          </Fragment>
                        );
                      })}
                    </div>
                  </Flex>
                </Dropdown.Item>
              ))}
              {(isIterableArray(suggestedFilters) ||
                isIterableArray(suggestionFiles) ||
                isIterableArray(suggestionMembers)) && (
                <hr className="text-200 dark__text-900" />
              )}
            </>
          )}

          {isIterableArray(suggestedFilters) && (
            <>
              <Dropdown.Header as="h6" className="px-x1 pt-0 pb-2 fw-medium">
                Suggested Filter
              </Dropdown.Header>
              {suggestedFilters.map(item => (
                <Dropdown.Item
                  as={Link}
                  to={item.url}
                  className="fs-9 px-x1 py-1"
                  key={item.id}
                >
                  <Flex alignItems="center">
                    <SubtleBadge
                      bg={item.type}
                      className="fw-medium text-decoration-none me-2"
                    >
                      {item.key}:{' '}
                    </SubtleBadge>
                    <div className="flex-1 fs-10">{item.text}</div>
                  </Flex>
                </Dropdown.Item>
              ))}
              {(isIterableArray(suggestionFiles) ||
                isIterableArray(suggestionMembers)) && (
                <hr className="text-200 dark__text-900" />
              )}
            </>
          )}

          {isIterableArray(suggestionFiles) && (
            <>
              <Dropdown.Header as="h6" className="px-x1 pt-0 pb-2 fw-medium">
                Files
              </Dropdown.Header>
              {suggestionFiles.map(item => (
                <MediaSearchContent item={item} key={item.id} />
              ))}
              {isIterableArray(suggestionMembers) && (
                <hr className="text-200 dark__text-900" />
              )}
            </>
          )}

          {isIterableArray(suggestionMembers) && (
            <>
              <Dropdown.Header as="h6" className="px-x1 pt-0 pb-2 fw-medium">
                Members
              </Dropdown.Header>
              {suggestionMembers.map(item => (
                <MediaSearchContent item={item} key={item.id} />
              ))}
            </>
          )}
        </div>
        <div className="text-center mt-n3">
          <p
            className={classNames('fs-8 fw-bold text-center', {
              'd-none': resultItem.length > 0
            })}
          >
            No Result Found.
          </p>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

MediaSearchContent.propTypes = {
  item: PropTypes.shape({
    catagories: PropTypes.string,
    url: PropTypes.string.isRequired,
    icon: PropTypes.shape({
      img: PropTypes.string.isRequired,
      size: PropTypes.string,
      status: PropTypes.string
    }),
    title: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string,
    time: PropTypes.string,
    file: PropTypes.bool,
    imgAttrs: PropTypes.shape({
      class: PropTypes.string
    })
  }).isRequired
};

SearchBox.propTypes = {
  autoCompleteItem: PropTypes.arrayOf(
    PropTypes.shape(MediaSearchContent.propTypes.item)
  )
};

export default SearchBox;

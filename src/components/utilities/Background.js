import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import FalconComponentCard from 'components/common/FalconComponentCard';
import Flex from 'components/common/Flex';
import classNames from 'classnames';
import { useAppContext } from 'providers/AppProvider';

const Background = () => {
  const {
    config: { isDark }
  } = useAppContext();
  return (
    <>
      <PageHeader
        title="Background"
        description="Convey meaning through background-color and add decoration with gradients."
        className="mb-3"
      />

      <FalconComponentCard>
        <FalconComponentCard.Header title="Theme colors" noPreview />
        <FalconComponentCard.Body>
          <Row className="g-0">
            {[
              'primary',
              'secondary',
              'success',
              'info',
              'warning',
              'danger',
              'light',
              'dark'
            ].map((color, index) => (
              <Col xs={6} sm={4} lg={3} key={index}>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  className={`p-3 bg-${color}`}
                  style={{ height: '180px' }}
                >
                  <code
                    className={color === 'light' ? 'text-black' : 'text-white'}
                  >
                    .bg-{color}
                  </code>
                </Flex>
              </Col>
            ))}
          </Row>
        </FalconComponentCard.Body>
      </FalconComponentCard>

      <FalconComponentCard>
        <FalconComponentCard.Header title="Gray shades" noPreview />
        <FalconComponentCard.Body>
          <Row className="g-0">
            {[
              '1100',
              '1000',
              '900',
              '800',
              '700',
              '600',
              '500',
              '400',
              '300',
              '200',
              '100'
            ].map((color, index) => (
              <Col xs={6} sm={4} lg={3} key={index}>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  className={classNames(`p-3 bg-${color}`, {
                    'border border-300': index > 10
                  })}
                  style={{ height: '180px' }}
                >
                  <div>
                    <code
                      className={
                        color < 500
                          ? `text-${isDark ? 'white' : 'black'}`
                          : `text-${isDark ? 'black' : 'white'}`
                      }
                    >
                      .bg-{color}
                    </code>
                  </div>
                </Flex>
              </Col>
            ))}
          </Row>
        </FalconComponentCard.Body>
      </FalconComponentCard>

      <FalconComponentCard>
        <FalconComponentCard.Header title="Background Gradient" noPreview>
          <p className="mt-2">
            By adding a <code>.bg-gradient</code> class, a linear gradient is
            added as background image to the backgrounds. This gradient starts
            with a semi-transparent white which fades out to the bottom.
          </p>
          <p className="mb-0">
            Do you need a gradient in your custom CSS ? Just add{' '}
            <code>background-image: var(--bs-gradient);</code>.
          </p>
        </FalconComponentCard.Header>
        <FalconComponentCard.Body>
          <Row className="g-0">
            {[
              'primary',
              'secondary',
              'success',
              'info',
              'warning',
              'danger',
              'light',
              'dark'
            ].map((color, index) => (
              <Col xs={6} sm={4} lg={3} key={index}>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  className={`p-3 bg-${color} bg-gradient`}
                  style={{ height: '180px' }}
                >
                  <div>
                    <code
                      className={
                        color === 'light' ? 'text-black' : 'text-white'
                      }
                    >
                      .bg-gradient
                    </code>
                    <br />
                    <code
                      className={
                        color === 'light' ? 'text-black' : 'text-white'
                      }
                    >
                      .bg-{color}
                    </code>
                  </div>
                </Flex>
              </Col>
            ))}
          </Row>
        </FalconComponentCard.Body>
      </FalconComponentCard>

      <FalconComponentCard>
        <FalconComponentCard.Header title="Subtle colors" noPreview />
        <FalconComponentCard.Body>
          <Row className="g-0">
            {[
              'primary',
              'secondary',
              'success',
              'info',
              'warning',
              'danger',
              'light',
              'dark'
            ].map((color, index) => (
              <Col xs={6} sm={4} lg={3} key={index}>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  className={`p-3 bg-${color}-subtle`}
                  style={{ height: '180px' }}
                >
                  <div>
                    <code
                      className={
                        color === 'light'
                          ? 'text-black'
                          : color === 'dark'
                          ? 'text-light'
                          : `text-${color}`
                      }
                    >
                      .bg-{color}-subtle
                    </code>
                  </div>
                </Flex>
              </Col>
            ))}
          </Row>
        </FalconComponentCard.Body>
      </FalconComponentCard>

      <FalconComponentCard>
        <FalconComponentCard.Header title="Brand colors" noPreview />
        <FalconComponentCard.Body>
          <Row className="g-0">
            {[
              'facebook',
              'google-plus',
              'twitter',
              'linkedin',
              'youtube',
              'github'
            ].map((color, index) => (
              <Col xs={6} sm={4} lg={3} key={index}>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  className={`p-3 bg-${color}`}
                  style={{ height: '180px' }}
                >
                  <code className="text-white">.bg-{color}</code>
                </Flex>
              </Col>
            ))}
          </Row>
        </FalconComponentCard.Body>
      </FalconComponentCard>
      <FalconComponentCard noGuttersBottom>
        <FalconComponentCard.Header title="Color and background" noPreview />
        <FalconComponentCard.Body>
          <Row className="g-0">
            {[
              'primary',
              'secondary',
              'success',
              'info',
              'warning',
              'danger',
              'light',
              'dark'
            ].map((color, index) => (
              <Col xs={6} sm={4} lg={3} key={index}>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  className={`p-3 text-bg-${color}`}
                  style={{ height: '180px' }}
                >
                  <code
                    className={color === 'light' ? 'text-dark' : 'text-light'}
                  >
                    .bg-{color}
                  </code>
                </Flex>
              </Col>
            ))}
          </Row>
        </FalconComponentCard.Body>
      </FalconComponentCard>
    </>
  );
};

export default Background;
